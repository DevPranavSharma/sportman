import React,{Component} from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';

class Login extends Component{
    render(){
        return (
            <div className="main">
                <Navbar/>
                <br/><br/>
                <center>
                <div class="card">

<h5 class="card-header info-color white-text text-center py-4">
  <strong>Sign in</strong>
</h5>


<div class=" col card-body  px-lg-5 pt-0">
<center>
  <div class="demo">
  <form class="text-center" action="#!">
  <br/>
   
  <div class="form-group">
    <label for="inputlg"></label>
    <input class="form-control input-lg" id="inputlg" type="text" placeholder="Email" />
  </div>

   
    <div class="md-form">
      <input type="password" id="materialLoginFormPassword" class="form-control" placeholder="Password" />
      <label for="materialLoginFormPassword"></label>
    </div>

    <div class="d-flex justify-content-around">
      <div>
      
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="materialLoginFormRemember" />
          <label class="form-check-label" for="materialLoginFormRemember">Remember me</label>
        </div>
      </div>
      <div>
       
        <a href="">Forgot password?</a>
      </div>
    </div>

   
    <button class="btn btn-primary btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

    
    <p>Not a member?
      <a href="">Signup</a>
    </p>


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