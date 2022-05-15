import React from 'react';
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';
import './Auth.css';
import { useState, useEffect } from 'react';
//import { Button } from '@mui/material';

const Auth = () => {
  //Sign Up State
  const [userSignUp, setUserSignUp] = useState({
    inputName:"", inputEmail:"", inputPassword:"", inputCPassword:""
  });

  //Sign In State
  const [user, setUser] = useState({
    email:"",
    password:""
  })

  const [response, setResponse] = useState(null);

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setResponse(response.data);
  //   });
  // }, []);

  // return (
  //   <div>
  //     <h1>{post.title}</h1>
  //     <p>{post.body}</p>
  //   </div>
  // );

  //Sign Up Functions
  let name, value;
  const handleInputs = (e) => {
    const {name, value} = e.target;
    console.log(name);
    console.log(value);
    setUserSignUp({
      ...userSignUp,//spread operator 
      [name]:value
      })
      console.log(userSignUp);
      e.preventDefault()
  }

  const signUp = ()=>{
    const {inputName,inputEmail,inputPassword,inputCPassword} = userSignUp
    if (inputName && inputEmail && inputPassword){
      if(inputPassword === inputCPassword){
        axios.post("http://localhost:9002/signup",userSignUp )
        .then(res=>document.getElementById("invCred").innerHTML=JSON.stringify(res.data).substring(12,35))
      }
      else{
        document.getElementById("invCred").innerHTML="Passwords did not match"
      }
    }
    else{
        document.getElementById("invCred").innerHTML="Invalid Credentials!"
    };
  }

  //Sign In Functions
  const handleChange = e => {
    const {name, value} = e.target
    console.log("Sign In")
    console.log(name)
    console.log(value)
    console.log(user)
    setUser({
      ...user,
      [name]: value
    })
  }
  const signIn = () => {
    let apiResponse = "";
    axios.post("http://localhost:9002/signin", user)
    .then(res => console.log(res))
  }
  
  //Return
  return (
    <div className='signin-signup'>
    <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
      {/* Sign Up UI */}
			<div class="signup">
				<form>
        <label for="chk" aria-hidden="true">Sign Up</label>
          <input type="text" name="inputName" id="inputName"
            value={userSignUp.inputName}
            placeholder="Username"
            onChange={handleInputs}
          />
          
          <input type="email" name="inputEmail" id="inputEmail" aria-describedby="emailHelp"
            value={userSignUp.inputEmail}
            placeholder="Email"
            onChange={handleInputs}
          />
					
          <input type="password" name="inputPassword" id="inputPassword"
            value={userSignUp.inputPassword}
            placeholder="Password"
            onChange={handleInputs}
          />

          <input type="password" name="inputCPassword" id="inputCPassword"
            value={userSignUp.inputCPassword}
            placeholder="Confirm Password"
            onChange={handleInputs}
          />

					<button type='button' onClick={signUp}>
              Sign Up
          </button>
          <p id="invCred" style={{textAlign:"center", fontWeight:"bold", color:"#fff"}}></p>
				</form>
			</div>

      {/* Sign In UI */}
			<div class="signin">
				<form>
					<label for="chk" aria-hidden="true">Sign In</label>
            <input type="email" id="form2Example1" name="email" value={user.email} placeholder="Email" onChange={handleChange}/>
            <input type="password" id="form2Example2" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
          <button type="button" onClick={signIn}>Sign In</button>
				</form>
			</div>
	</div>
  </div>
  )
  }  
    {/* <form>
    <div className='container'>
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" name="email" value={user.email} class="form-control" onChange={handleChange}/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" name="password" value={user.password} class="form-control" onChange={handleChange} />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="button" class="btn btn-primary btn-block mb-4" onClick={login}>Sign In</button>


  <div class="text-center">
    <p>Not a member? <a href="signup"><Link to="/signup">Register</Link></a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
        <FacebookIcon/>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
        <GoogleIcon/>
    </button>
  </div>
  </div>
</form> */}

export default Auth