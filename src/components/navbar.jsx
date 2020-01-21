import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import mElogo from './mainlogo.jpg';
import './navbar.css';



class Navbar extends Component{
    render(){
        return(
       <div className="heading1">
        <nav className="navbar navbar-inverse navbar-dark">
  <div className="container-fluid">
    <div className="navbar-header">
    <Link to="/">  <img src={mElogo} alt="pic" width="50px" height="50px"></img></Link>
    </div>
    <div className="nav navbar-right">
    <Link to="login" class="btn btn-primary" style={{marginRight: "16px"}} >Login</Link>
    <Link to="login" class="btn btn-primary">CREATE EVENT</Link>
       
    </div>
  </div>
</nav>
</div>
     )
 
}
}
export default Navbar;
  