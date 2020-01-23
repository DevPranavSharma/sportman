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
                    <div className="transbox container-fluid cu">
                    <p className="n">You are in Chitkara University looking for Sports events happening All Time.</p> 
                    </div>
                </div>
                <div className="container-fluid">
                <Onevents/>
                </div>


               
            </React.Fragment>
        )
    }
}
export default Content;