import React,{Component} from 'react';
import Navbar from './navbar';
//import {Link} from 'react-router-dom';
import './addevent.css';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';

class AddEvent extends Component{
    constructor(props){
        super(props);
        this.onChangeEventTitle=this.onChangeEventTitle.bind(this);
        this.onChangeEventVenue=this.onChangeEventVenue.bind(this);
        this.onStartDateChange=this.onStartDateChange.bind(this);
        this.onEndDateChange=this.onEndDateChange.bind(this);
        this.onChangeTotalSeats=this.onChangeTotalSeats.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            eventtitle : '',
            eventvenue : '',
            starttime: new Date(),
            endttime: new Date(),
            totalseats : 0,
            participants : [],

        }
    }
    onChangeEventTitle(e){
        this.setState({
            eventtitle: e.target.value

        })
    }

    onChangeEventVenue(e){
        this.setState({
            eventvenue: e.target.value

        })
    }

    onChangeTotalSeats(e){
        this.setState({
            totalseats: e.target.value

        })
    }
    
    onStartDateChange(date){ this.setState({ starttime: date })}
    onEndDateChange(date) {this.setState({ endtime : date})}
    onSubmit(e){
        e.preventDefault();
        const event={
            eventtitle : this.state.eventtitle,
            eventvenue : this.state.eventvenue,
            starttime: this.state.starttime,
            endtime: this.state.endtime,
            totalseats : this.state.totalseats,
            participants : [],

                         
        }
        console.log(event);
        axios.post('http://localhost:5006/events/add',event).then(res=>console.log(res.data))
        .catch(err=>{
            alert("Another event exists at this time at this venue")
        });
        setTimeout(function(){window.location ='/';}, 1000);
        

    }
    render(){
        return (
            <div>
            <div className='bg'>
                 <Navbar/>
                 <br/>
                <div className='container-fluid start'><h2>Start here</h2></div>
            </div> 
             <div className='bg1 container-fluid'  >
                <br/><br/><form onSubmit={this.onSubmit}><h5>About</h5><br/>
                <h6>Event Title</h6>
                <input onChange={this.onChangeEventTitle} type="text"/>
                
                <br/><h6>Event Venue</h6>
                <input type="text" onChange={this.onChangeEventVenue} placeholder="Enter a location"/>

                <br/><h6>Event Starting Date and Time</h6>
                <DateTimePicker onChange={this.onStartDateChange}
          value={this.state.starttime}/>
                <br/><h6>Event Ending Date and Time</h6>
                <DateTimePicker onChange={this.onEndDateChange}
          value={this.state.endtime} />




                <h5>Total seats</h5>
                <input  onChange={this.onChangeTotalSeats} type="number" />

                
                <input type='submit'/>


            </form>
        </div>
            </div>
        )
    }
}
export default AddEvent;