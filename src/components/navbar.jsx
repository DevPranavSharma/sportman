import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
class Navbar extends Component{
    render(){
        return(
       <div>
        <nav className="navbar navbar-inverse navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="navbar-header">
      <img src="" alt="pic" width="120px" height="50px"></img>
    </div>
    <div className="nav navbar-right">
    <button className= "btn btn-success">SignUp</button>
    <Link to="login" class="btn btn-primary">Login</Link>
    </div>
  </div>
</nav>
</div>
     )
 }
}
export default Navbar;
        