import React,{Component} from 'react';

import Content from './content';
import Login from './login';
import {BrowserRouter as Router , Switch ,  Route, Redirect} from 'react-router-dom';
import Signup from './signup';
import AddEvent from './addevent'; 
import EventDetails from './eventdetails';


class MainPage extends Component{
    constructor(props){
        super(props)
       this.state = {
           username : ""
       }
    }
    render(){
        // if(this.state.loggedin==true){
            if(localStorage.getItem('userdata')){
        return(
           <Router>
               <Switch>
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
                <Route  path="/events/details/:id"  component={EventDetails}/>
                
            </div>
            </Switch>
            </Router>
        )
                }
                else{
                    return(
                        <Router>
                        <Route exact path="/" render={()=>(
                            <Login/>
                        )}/>
                        <Route exact path="/login" render={()=>(
                            <Login/>
                        )}/>
                        <Route exact path="/signup" render={()=>(
                    <Signup/>)}/>
                        <Route component={Login} />
                        </Router> 
                    
                    )

                    
                }
                }
    //             else{
    //                 return(
    //                     <Login/>
    //                 )
    //             }
    // }
    
}
export default MainPage;