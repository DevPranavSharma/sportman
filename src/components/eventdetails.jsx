import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
import Axios from 'axios';
import {Link} from 'react-router-dom';


class EventDetails extends Component{
    constructor(props){
        
        super(props);
        this.formatDate=this.formatDate.bind(this);
        this.state = {
            event : {},
            username : '',
            remainingseats : 0,
            participant: []
        }
    }
    formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric',hour:'numeric',minute:'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }
    handleRegistration = ()=>{
        var pararr= this.state.event.participants;
        if(pararr.length===this.state.event.totalseats){
            alert('No seats left');
        }
        else if(pararr.indexOf(this.state.username)!==-1){
            alert('You have already registered')
        }
        else{
        pararr.push(this.state.username);
        console.log(pararr+ ' '+ pararr.length);
           
            var eventt = this.state.event.eventtitle;
            var ev = this.state.event.eventvenue;
            var st = this.state.event.starttime;
            var et = this.state.event.endtime;
            var ts = this.state.event.totalseats;
            var newevent = {
               eventtitle: eventt,
               eventvenue: ev,
                startime: st,
                endtime :et,
                totalseats :ts,
                participants :pararr
            }
            console.log(this.state.event._id)
            this.setState({
                event : newevent,
                participant: pararr
            })
            Axios.post(`http://localhost:5006/events/update/${this.props.match.params.id}`,newevent).then(res => console.log(res.data));
            alert('You have successfully registered');}
            }
        


    
    componentDidMount(){
        console.log(this.props);
        console.log(this.props.match.params.id);
        Axios.get(`http://localhost:5006/events/${this.props.match.params.id}`).then(
            res=>{
                console.log(res.data);
                console.log('event fetching complete');
                this.setState({
                    event : res.data,
                    participant : res.data.participants
                })
            }
        )
        .catch(err=>{
            console.log(err);
        })
        
        var userd = JSON.parse(localStorage.getItem('userdata'));
        
        this.setState( {
            username : userd.username,
            
        })
        //console.log(this.state.event.length+ 'this is event data check'+this.state.participant.length);

    }
    
    render(){
        return(
            <React.Fragment>
         <Navbar/>
          {/* <button onClick={alert('hello')}>Click for local storage</button>  */}
          {/* <button onClick={() => this.handleclick()}>hello</button> */}
          <div>
        <h1 className="display-2">{this.state.event.eventtitle}</h1>
        <h4 className="card-subtitle mb-2 text-muted">{this.state.event.eventvenue}</h4>
        <p className="card-text">Remaining Seats {(this.state.event.totalseats) - (this.state.participant.length)}</p>
        <p className="card-text">{this.formatDate(this.state.event.starttime)}</p>
        <p className="card-text">{this.formatDate(this.state.event.endtime)}</p>
        <div className="btn btn-primary" onClick={this.handleRegistration}>Register</div>
         </div>
         </React.Fragment>
        )
        
       
    }
    

}

export default EventDetails;