import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './content.css';
import Navbar from './navbar';
import Onevents from './onevents';


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
                <Onevents/>


               
            </React.Fragment>
        )
    }
}
export default Content;