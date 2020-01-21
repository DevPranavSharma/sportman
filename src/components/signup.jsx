import React,{Component} from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
import {Link} from 'react-router-dom';


class Signup extends Component{
    render(){
        return (
            <div className="main">
                <Navbar/>
                <br/><br/>
                <center>
                <div class="card">

<h5 class="card-header info-color white-text text-center py-4">
  <strong>Sign Up</strong>
</h5>


<div class=" col card-body  px-lg-5 pt-0">
<center>
  <div class="demo">
  <form class="text-center" action="#!">
  <br/>
   
  <div class="form-group">
    <label for="inputlg"></label>
   
  </div>
  <div class="md-form">
      <input type="text" id="materialLoginFormText" class="form-control" placeholder="Full name" />
      <label for="materialLoginFormText"></label>
    </div>
    <div>
    <input type="email" class="form-control" id="materialLoginFormEmail" aria-describedby="emailHelp" placeholder="Email address"/>
  </div>
  <br/>
   
    <div class="md-form">
      <input type="password" id="materialLoginFormPassword" class="form-control" placeholder="Password" />
      <label for="materialLoginFormPassword"></label>
    </div>

    <div>
    <input type="number" class="form-control" id="materialLoginFormEmail" aria-describedby="emailHelp" placeholder="Mobile Number"/>
  </div>
     
    
   
<br></br>
    <div class="d-flex justify-content-around">
      <div>
      
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="materialLoginFormRemember" />
          <label class="form-check-label" for="materialLoginFormRemember">By signing up, I agree to MeraEvents Privacy Policy</label>
        </div>
      </div>
      <div>
       
      </div>
    </div>

   
    <button class="btn btn-primary btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign Up</button>

    <Link to="login" >Already Registered? Log in</Link>


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
export default Signup;