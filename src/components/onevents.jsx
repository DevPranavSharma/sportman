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
                     <div className="container">
                         <div className="row">
                            <div className="col-sm">
                            <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="a good"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
                            </div>
                                 </div>
                        <div className="col-sm">
                        <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="cardd imze"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
                            </div>
                        </div>
                         <div className="col-sm">
                         <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Carrd imaz"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
                            </div>
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