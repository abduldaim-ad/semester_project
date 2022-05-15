import React from 'react';
import { useState } from 'react';
import axios from "axios";
import Button from '@mui/material/Button';

const SignUp = () => {
  const [userSignUp, setUserSignUp] = useState({
    inputName:"", inputEmail:"", inputPassword:"", inputCPassword:""
  });
  let name, value;
  const handleInputs = (e) => {
    e.preventDefault()
    const {name, value} = e.target;
    console.log(name);
    console.log(value);
    setUserSignUp({
      ...userSignUp,//spread operator 
      [name]:value
      })
      console.log(userSignUp);
  }

  const egister = ()=>{
    const {inputName,inputEmail,inputPassword,inputCPassword} = userSignUp
    if (inputName && inputEmail && inputPassword && (inputPassword === inputCPassword)){
     axios.post("http://localhost:9002/signup",userSignUp )
     .then(res=>console.log(res))
    }
    else{
        alert("invalid input")
    };
  }
  return (
    <main style={{ padding: "1rem 0" }}>
{/* <form>
<div className="container">
  <div className="mb-3">
    <label htmlFor="inputName" className="form-label">Name</label>
    <input type="text" className="form-control" name="inputName" id="inputName"
      value={userSignUp.inputName}
      onChange={handleInputs}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="inputEmail" className="form-label">Email Address</label>
    <input type="email" className="form-control" name="inputEmail" id="inputEmail" aria-describedby="emailHelp"
      value={userSignUp.inputEmail}
      onChange={handleInputs}
    />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="inputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" name="inputPassword" id="inputPassword"
      value={userSignUp.inputPassword}
      onChange={handleInputs}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="inputPassword2" className="form-label">Re-Type Password</label>
    <input type="password" className="form-control" name="inputCPassword" id="inputCPassword"
      value={userSignUp.inputCPassword}
      onChange={handleInputs}
    />
  </div>
      <button type="button" className="btn btn-primary btn-block mb-4" onClick={egister}>Sign Up</button>
  </div>
</form> */}

<div class="signup">
				<form>
        <label for="chk" aria-hidden="true">Sign up</label>
          <input type="text" className="form-control" name="inputName" id="inputName"
            value={userSignUp.inputName}
            placeholder="userSignUpname"
            onChange={handleInputs}
          />
          
          <input type="email" className="form-control" name="inputEmail" id="inputEmail" aria-describedby="emailHelp"
            value={userSignUp.inputEmail}
            placeholder="Email"
            onChange={handleInputs}
          />
					
          <input type="password" className="form-control" name="inputPassword" id="inputPassword"
            value={userSignUp.inputPassword}
            onChange={handleInputs}
            placeholder="Password"
          />

          <input type="password" className="form-control" name="inputCPassword" id="inputCPassword"
            value={userSignUp.inputCPassword}
            onChange={handleInputs}
            placeholder="Confirm Password"
          />

					<button>Sign up</button>
				</form>
</div>

    </main>
  )
}

export default SignUp