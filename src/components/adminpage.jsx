import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './default.css';
import Default from './default.jsx';
import axios from 'axios';
import './onevents.css';
import './display.css';
import Navbar from './navbar';
import Axios from 'axios';


class AdminPage extends Component{
    constructor(props){
        super(props);
        this.formatDate=this.formatDate.bind(this);
        this.state = {
            username : '',
            event : []
        }
    }
    formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }
    handleApprove(id){
        var confirmation = window.confirm("Do you really want to approve this event");
        if(confirmation){
            Axios.post(`http://localhost:5006/events/approve/${id}`).then(res => console.log(res.data));
            alert('You have successfully approved the event');
            setTimeout(function(){window.location ='/adminpage';}, 1000);
        }


        }
    
    
    handleDeletion(id){
            var confirmation = window.confirm("Do you really want to delete this event");
            if(confirmation){
                Axios.delete(`http://localhost:5006/events/${id}`).then(res => console.log(res.data));
                alert('You have successfully deleted the event');
                setTimeout(function(){window.location ='/adminpage';}, 1000);
            }
    
            }

    
    componentDidMount(){
      var userdata=  JSON.parse(localStorage.getItem('userdata'));
      console.log(userdata.username);
      this.setState({
          username : userdata.username
      })
      console.log('this is ' +userdata.username);
      if(!userdata.username.localeCompare('admin')){
        axios.get('http://localhost:5006/events/')
        .then(response => {
          if (response.data.length > 0) {
            console.log(response.data);
          this.setState({
            event: response.data
           
          });
          }
        })
        .catch((error) => {
          console.log(error);
          
        })
      }
    }
    render(){
        var usern = this.state.username;
        if(!usern.localeCompare("admin"))
      {  return(
            <React.Fragment>
                    <Navbar/>
               <div className="container-fluid">
                <p className="transbox"> Here are the pending events</p>
               <div className="background2">
        <div className="row">
            {
                
                this.state.event.map((val)=>{ if(!val.approved){
                    return <div className="card " >
                    <div className="card-body ">
                              <h5 className="card-title">{val.eventtitle}</h5>
                              <h6 className="card-subtitle mb-2 text-muted">{val.eventvenue}</h6>
                              <p className="card-text">Total Seats {val.totalseats}</p>
                              <p className="card-text">{this.formatDate(val.starttime)}</p>
                              <div className="row">
                              <div className="btn btn-danger btn-card"  onClick={this.handleDeletion.bind(null,val._id)}>Delete</div>
                              <div className="btn btn-success btn-card" onClick={this.handleApprove.bind(null,val._id)}>Approve</div>
                              </div>                             

                              
                     
                              
                    </div>
                  </div>
                
                  
                 } })
            }
            </div>
            </div>
            </div>
            </React.Fragment>
        )}
        else{
            return (
                <Default/>
            )
        }

    }
}
export default AdminPage;