import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './onevents.css';


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
                    <div className="transbox">
                    <center> <h3>Events List</h3>
                             <p><ul>
                                <li>Cricket match <button onClick={this.register} class="btn btn-primary"> Register </button></li>
                                <li>Football Tournament  <button class="btn btn-primary" onClick={this.register}> Register </button></li>
                                <li>Badminton Tournament  <button class="btn btn-primary" onClick={this.register} > Register </button></li> 
                                 
                                 </ul></p>
                    </center> 
                    </div>
                </div>
                


               
            </React.Fragment>
        )
       
    }
    

}

export default Onevents;