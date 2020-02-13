import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import mElogo from './mainlogo.jpg';
import './navbar.css';



class Navbar extends Component{
  handlelogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userdata');
}  
  render(){

        return(
       <div className="heading1">
        <nav className="navbar navbar-inverse navbar-dark">
  <div className="container-fluid">
    <div className="navbar-header">
    <Link to="/">  <img src={mElogo} alt="pic" width="50px" height="50px"></img></Link>
    </div>
    <div className="nav navbar-right">
    <Link to="login" className="btn btn-primary" style={{marginRight: "16px"}  } onClick={this.handlelogout} >Logout</Link>
    <Link to="addevent" className="btn btn-primary">CREATE EVENT</Link>
       
    </div>
  </div>
</nav>
</div>
     )
 
}
}
export default Navbar;
  