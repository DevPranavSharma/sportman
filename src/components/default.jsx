import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './default.css'
import  errorpage from './finalerror.jpg';


class Default extends Component{
    render(){
        return(
            <React.Fragment>
                <img src={errorpage}  alt="This page doesnot exists" className="error-page"></img>
               
            </React.Fragment>
        )
    }
}
export default Default;