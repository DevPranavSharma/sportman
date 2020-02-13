import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './onevents.css';
import axios from 'axios';
//just a change to see 
import Display from './display'

class Onevents extends Component{
    constructor(props){
        super(props);
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
            this.setState({
              event: response.data
             
            });
            }
          })
          .catch((error) => {
            console.log(error);
            
          })
    
      }
      
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