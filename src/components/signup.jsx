import React,{Component} from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
import {Link} from 'react-router-dom';
import axios from 'axios';
 
class Signup extends Component{
    constructor(props){
      super(props);
      this.onUserChange=this.onUserChange.bind(this);
        this.onPassChange=this.onPassChange.bind(this);
        this.onIdChange=this.onIdChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            username : '',
            password : '',
            college_id: 0,

        }

    }
    onUserChange(e){
      this.setState({
        username: e.target.value
    })
  }
  onPassChange(e){
    this.setState({
    password: e.target.value
  })
}
onIdChange(e){
  this.setState({
    college_id: e.target.value
})
}
onSubmit(e){
  e.preventDefault();
  const user={
      username : this.state.username,
      password : this.state.password,
      college_id: this.state.college_id,
     }
  axios.post('http://localhost:5006/users/add',user).then(res=>console.log(res.data));   
  
  console.log(user);
  //axios.post('http://localhost:5006/users/add',user).then(res=>console.log(res.data));
  setTimeout(function(){window.location ='/';}, 1000);
  }


    render(){
        return (
            <div className="main">
                <Navbar/>
                <br/><br/>
                <center>
                <div className="card">

<h5 className="card-header info-color white-text text-center py-4">
  <strong>Sign Up</strong>
</h5>


<div className=" col card-body  px-lg-5 pt-0">
<center>
  <div className="demo">
  <form className="text-center" onSubmit={this.onSubmit}>
  <br/>
     <div className="form-group">
    <label for="inputlg"></label>
   
  </div>
  <div className="md-form">
      <input type="text" id="materialLoginFormText" onChange={this.onUserChange} className="form-control" placeholder="Username" />
      <label for="materialLoginFormText"></label>
    </div>
    <div>
    <input type="number" className="form-control" onChange={this.onIdChange} id="materialLoginFormEmail" aria-describedby="emailHelp" placeholder="College ID"/>
  </div>
  <br/>
   
    <div className="md-form">
      <input type="password" id="materialLoginFormPassword" onChange={this.onPassChange} className="form-control" placeholder="Password" />
      <label for="materialLoginFormPassword"></label>
    </div>



    
     
    
   
<br></br>
    <div className="d-flex justify-content-around">
      <div>
      
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="materialLoginFormRemember" />
          <label className="form-check-label" for="materialLoginFormRemember">By signing up, I agree to MeraEvents Privacy Policy</label>
        </div>
      </div>
      <div>
       
      </div>
    </div>

   
    <button className="btn btn-primary btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign Up</button>

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