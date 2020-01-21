import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './onevents.css';
//just a change to see 

class Onevents extends Component{
    constructor(){
        super()
        this.register = this.register.bind(this)
    }
    register(){
        alert('you have successfully registered for this event')
     }
     
    render(){
        return(
            <React.Fragment>
        
                <div className="background2">
                    <div>
                     <h3>Upcoming Events</h3>
                     <br></br>
                     <div class="container">
                         <div class="row">
                            <div class="col-sm">
                            <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
                            </div>
                                 </div>
                        <div class="col-sm">
                            One of three columns
                        </div>
                         <div class="col-sm">
                             One of three columns
                         </div>
                         </div>
                    </div>
                    </div>
                </div>
                


               
            </React.Fragment>
        )
       
    }
    

}

export default Onevents;