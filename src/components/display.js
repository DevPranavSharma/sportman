import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './onevents.css';
import './display.css';


class Display extends Component{
    
    render(){
        return(
        <div className="row">
    
            {
                
                this.props.arr.map((val)=>{
                    return <div className="card col- " >
                    <div className="card-body">
                              <h5 className="card-title">{val.eventtitle}</h5>
                              <h6 className="card-subtitle mb-2 text-muted">{val.eventvenue}</h6>
                              <p className="card-text">{val.totalseats}</p>
                      <a href="/" class="card-link">See More</a>
                      <a href="/" class="card-link">Register</a>
                    </div>
                  </div>
                })
            }
            </div>
        )
       
    }
    

}

export default Display;