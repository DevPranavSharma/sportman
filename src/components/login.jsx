import React,{Component} from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends Component{
   constructor(props){
     super(props);
     this.onChangeUsername=this.onChangeUsername.bind(this);
     this.onChangeID=this.onChangeID.bind(this);
     this.onChangePassword=this.onChangePassword.bind(this);
     this.onSubmit=this.onSubmit.bind(this);
     this.state={
       username : '',
       password : '',
       college_id : 0
     }
   };

   onChangeUsername(e){
    this.setState({
      username: e.target.value
  });
   }
   
   onChangePassword(e){
    this.setState({
      password: e.target.value
  });
   }


   onChangeID(e){
    this.setState({
      college_id: e.target.value
  });
   }

   onSubmit(e){
    e.preventDefault();
    if(this.state.username.length===0|| this.state.password.length===0||this.state.college_id===0){
      alert('Please enter the values');
  }
  else{
  const user ={
      username : this.state.username,
      password:this.state.password,
      college_id : this.state.college_id
  }
  axios.post('http://localhost:5006/users/login',user)
  .then(res=>{
      console.log(res.data);
      if(res.data.error){
          alert(res.data.error)
          localStorage.removeItem('user');
      }else{
          this.setState({
              user:res.data
          })

          localStorage.setItem('user',this.state.user);
          localStorage.setItem('userdata',JSON.stringify(user));

          window.location = '/';
          
      }

    
   })
  }
}
    render(){
        return (
            <div className="main">
                
                <br/><br/>
                <center>
                <div class="card">

<h5 className="card-header info-color white-text text-center py-4">
  <strong>Happy to see you return</strong>
</h5>


<div className=" col card-body  px-lg-5 pt-0">
<center>
  <div className="demo">
  <form className="text-center" onSubmit={this.onSubmit}>
  <br/>
   
  <div className="form-group">
    <label for="inputlg"></label>
    <input className="form-control input-lg" id="inputlg" type="text" required onChange={this.onChangeUsername} placeholder="Username" />
  </div>
  <div className="form-group">
    <label for="inputlg"></label>
    <input className="form-control input-lg" id="inputlg" type="number" required onChange={this.onChangeID} placeholder="College ID" />
  </div>

   
    <div className="md-form">
      <input type="password" id="materialLoginFormPassword" required onChange={this.onChangePassword} class="form-control" placeholder="Password" />
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