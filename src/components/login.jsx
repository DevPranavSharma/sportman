import React,{Component} from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
import {Link} from 'react-router-dom';


class Login extends Component{
    render(){
        return (
            <div className="main">
                <Navbar/>
                <br/><br/>
                <center>
                <div class="card">

<h5 className="card-header info-color white-text text-center py-4">
  <strong>Happy to see you return</strong>
</h5>


<div className=" col card-body  px-lg-5 pt-0">
<center>
  <div className="demo">
  <form className="text-center" action="#!">
  <br/>
   
  <div className="form-group">
    <label for="inputlg"></label>
    <input className="form-control input-lg" id="inputlg" type="text" placeholder="Username" />
  </div>

   
    <div className="md-form">
      <input type="password" id="materialLoginFormPassword" class="form-control" placeholder="Password" />
      <label for="materialLoginFormPassword"></label>
    </div>

    <div className="d-flex justify-content-around">
      <div>
      
        <div className="form-check">
          <input type="checkbox" class="form-check-input" id="materialLoginFormRemember" />
          <label className="form-check-label" for="materialLoginFormRemember">Remember me</label>
        </div>
      </div>
      <div>
       
        <a href="http://www.google.com">Forgot password?</a>
      </div>
    </div>

   
    <button className="btn btn-primary btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

    
      <Link to="signup" >New to MeraEvents? Sign Up</Link>



  </form>
 
  </div>
  </center>
</div>
</div>
</center>
            </div>
        )
    }
}
export default Login;