import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './onevents.css';
import './display.css';


class Display extends Component{
    constructor(props){
        super(props)
        this.formatDate=this.formatDate.bind(this);
        //var date = Date.parse(this.props.date.toString());
    }
     formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }
    render(){
        return(

        <div className="background2">
        <div className="row">
            {
                
                this.props.arr.map((val)=>{
                    return <div className="card " >
                    <div className="card-body ">
                              <h5 className="card-title">{val.eventtitle}</h5>
                              <h6 className="card-subtitle mb-2 text-muted">{val.eventvenue}</h6>
                              <p className="card-text">Remaining Seats {val.totalseats}</p>
                              <p className="card-text">{this.formatDate(val.starttime)}</p>
                             
                              
                     
                              <Link to={`events/details/${val._id}`} className="card-link">Register</Link>
                    </div>
                  </div>
                  
                })
            }
            </div>
            </div>
        )
       
    }
    

}

export default Display;