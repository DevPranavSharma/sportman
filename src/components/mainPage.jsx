import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Content from './content';
import Login from './login';
import {Route} from 'react-router-dom';
import Signup from './signup';


class MainPage extends Component{
    render(){
        return(

            <div className="container-fluid">
                 <Route exact path="/" render={()=>(
                        <Content/>  
                )}/>

                 <Route exact path="/login" render={()=>(
                    <Login/>
                )}/>
                 <Route exact path="/signup" render={()=>(
                    <Signup/>
                )}/>
            </div>
        )
    }
    
}
export default MainPage;