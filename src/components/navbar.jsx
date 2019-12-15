import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import logo from './mainlogo.jpg';

class Navbar extends Component{
    render(){
        return(
       <div>
        <nav className="navbar navbar-inverse navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="navbar-header">
    <Link to="/">  <img src={logo} alt="pic" width="50px" height="50px"></img></Link>
    </div>
    <div className="nav navbar-right">
    <Link to="signup" class="btn btn-primary">Sign up</Link>
    <Link to="login" class="btn btn-primary">Login</Link>
    </div>
  </div>
</nav>
</div>
     )
 }
}
export default Navbar;
        