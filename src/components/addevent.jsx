import React,{Component} from 'react';
import Navbar from './navbar';
import {Link} from 'react-router-dom';
import './addevent.css';

class AddEvent extends Component{
    render(){
        return (
           <div>
            <div class='bg'>
                 <Navbar/>
                 <br/>
                <div class='container-fluid start'><h2>Start here</h2></div>
            </div> 
             <div class='bg1 container-fluid'  >
                <br/><br/><form><h5>About</h5><br/>
                <h6>Event Title</h6>
                <input type="text"/>
                
                <br/><h6>Event Venue</h6>
                <input type="text" placeholder="Enter a location"/>

                <br/><h6>Event Date</h6>
                <input type="text" placeholder="Enter a location"/>




                <h5>Total seats</h5>
                <input type="number"/>

                <h5>Design your event</h5>
                <input type='file'/>


            </form>
        </div>
            </div>
        )
    }
}
export default AddEvent;