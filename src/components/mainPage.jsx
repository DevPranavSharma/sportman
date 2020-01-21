import React,{Component} from 'react';

import Content from './content';
import Login from './login';
import {Route} from 'react-router-dom';
import Signup from './signup';
import AddEvent from './addevent'; 


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
                <Route exact path="/addevent" render={()=>(
                    <AddEvent/>
                )}/>
            </div>
        )
    }
    
}
export default MainPage;