import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './content.css';
import Navbar from './navbar';


class Content extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className="background">
                    <div className="transbox">
                    <center> <p>Sports Events</p></center> 
                    </div>
                </div>


               
            </React.Fragment>
        )
    }
}
export default Content;