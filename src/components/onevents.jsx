import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './onevents.css';
import axios from 'axios';
//just a change to see 
import Display from './display'

class Onevents extends Component{
    constructor(){
        super();
        //this.state.event = this.state.bind(this);
        this.state={
            event : []
        }
        this.register = this.register.bind(this);
        
    }
    register(){
        alert('you have successfully registered for this event')
     }
     componentDidMount() {
        axios.get('http://localhost:5006/events/')
          .then(response => {
            if (response.data.length > 0) {
              
            console.log(response.data);
            //console.log("this is event "+response.data[0].eventitle);
            this.setState({
              //event: response.data.map(events => events.eventitle)
              event: response.data
             
            });
            }
          })
          .catch((error) => {
            console.log(error);
            
          })
    
      }
      
    //  eventList= this.state.event.map(event=>{
    //      return(
    //      <p>{event}</p>
    //      )
     //})
    render(){
        return(
            <div>
               
               <p className="transbox"> Upcoming Events</p>
               <Display arr={this.state.event}/>
               </div>
        )
       
    }
    

}

export default Onevents;