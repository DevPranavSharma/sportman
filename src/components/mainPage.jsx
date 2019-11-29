import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Content from './content';
import Login from './login';
import {Route} from 'react-router-dom';


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
            </div>
        )
    }
    
}
export default MainPage;