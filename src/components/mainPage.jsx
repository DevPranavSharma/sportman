import React,{Component} from 'react';

import Content from './content';
import Login from './login';
import {BrowserRouter as Router , Switch ,  Route, Redirect} from 'react-router-dom';
import Signup from './signup';
import AddEvent from './addevent'; 
import EventDetails from './eventdetails';
import Default from './default';
import AdminPage from './adminpage';


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
                <Route  exact path="/adminpage"  component={AdminPage}/>
                <Route exact strict  component={Default}/>
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