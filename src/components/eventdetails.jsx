import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
import Axios from 'axios';


class EventDetails extends Component{
    constructor(props){
        
        super(props);
        this.formatDate=this.formatDate.bind(this);
        this.state = {
            event : {}
        }
    }
    formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric',hour:'numeric',minute:'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }
    componentDidMount(){
        console.log(this.props);
        console.log(this.props.match.params.id);
        Axios.get(`http://localhost:5006/events/${this.props.match.params.id}`).then(
            res=>{
                console.log(res.data);
                console.log('event fetching complete');
                this.setState({
                    event : res.data
                })
            }
        )
        .catch(err=>{
            console.log(err);
        })

    }
    handleclick = () =>{
        alert('hello');
    }
    render(){
        return(
            <div>
         <Navbar/>
          {/* <button onClick={alert('hello')}>Click for local storage</button>  */}
          {/* <button onClick={() => this.handleclick()}>hello</button> */}
        <h1 className="display-2">{this.state.event.eventtitle}</h1>
        <h4 className="card-subtitle mb-2 text-muted">{this.state.event.eventvenue}</h4>
        <p className="card-text">Remaining Seats {this.state.event.totalseats}</p>
        <p className="card-text">{this.formatDate(this.state.event.starttime)}</p>
        <p className="card-text">{this.formatDate(this.state.event.endtime)}</p>
         </div>
        )
        
       
    }
    

}

export default EventDetails;