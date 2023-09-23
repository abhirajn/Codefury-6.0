
import React from 'react'
import './Login.css'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import { RiContactsBookLine } from 'react-icons/ri';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [Name, setName] = useState("")

  return (
    <div class="container modal" id="modal-signup">
           <div class="login-box"> 
              <h2>Signup</h2>  
                <form id="signup-form">
                    <div class="input-box">
                        <input type="text" id="signup-username" required onChange={(event) => {
                        setName(event.target.value);
                    }}/>
                        <label for="signup-username">Username</label>
                     </div>
                    <div class="input-box">
                       <input type="email"  id="signup-email" required onChange={(event) => {
                        setEmail(event.target.value);
                    }}/>
                       <label for="signup-email">Email</label>
                    </div>
                    <div class="input-box">
                        <input type="password" id="signup-password" required onChange={(event) => {
                        setPassword(event.target.value);
                    }}/>
                        <label for="signup-password" >Password</label>
                    </div>
                          <button  class="btn" onClick={async() => {
                            console.log(Name + " " + email + " " + password)
                        const response = await axios.post(`http://localhost:8000/user/signup`, {
                            name : Name,
                            username: email,
                            password: password
                        })
                        console.log("hi")
                        let data = response.data;
                        localStorage.setItem("token", data.token);
                        window.location = "/"
                        // navigate('/')
                    }}>Signup</button>
                       <div class="signup-link" onClick={()=>{
                        window.location = "/login"
                       }}>  <p>ALready a user</p>
                            <p >Login</p>
                       </div>
                </form>
           </div> 
                  
<span style={{"--i":0}}></span>
<span style={{"--i":1}}></span>
<span style={{"--i":2}}></span>
<span style={{"--i":3}}></span>
<span style={{"--i":4}}></span>
<span style={{"--i":5}}></span>
<span style={{"--i":6}}></span>
<span style={{"--i":7}}></span>
<span style={{"--i":8}}></span>
<span style={{"--i":9}}></span>
<span style={{"--i":10}}></span>
<span style={{"--i":11}}></span>
<span style={{"--i":12}}></span>
<span style={{"--i":13}}></span>
<span style={{"--i":14}}></span>
<span style={{"--i":15}}></span>
<span style={{"--i":16}}></span>
<span style={{"--i":17}}></span>
<span style={{"--i":18}}></span>
<span style={{"--i":19}}></span>
<span style={{"--i":20}}></span>
<span style={{"--i":21}}></span>
<span style={{"--i":22}}></span>
<span style={{"--i":23}}></span>
<span style={{"--i":24}}></span>
<span style={{"--i":25}}></span>
<span style={{"--i":26}}></span>
<span style={{"--i":27}}></span>
<span style={{"--i":28}}></span>
<span style={{"--i":29}}></span>
<span style={{"--i":30}}></span>
<span style={{"--i":31}}></span>
<span style={{"--i":32}}></span>
<span style={{"--i":33}}></span>
<span style={{"--i":34}}></span>
<span style={{"--i":35}}></span>
<span style={{"--i":36}}></span>
<span style={{"--i":37}}></span>
<span style={{"--i":38}}></span>
<span style={{"--i":39}}></span>
<span style={{"--i":40}}></span>
<span style={{"--i":41}}></span>
<span style={{"--i":42}}></span>
<span style={{"--i":43}}></span>
<span style={{"--i":44}}></span>
<span style={{"--i":45}}></span>
<span style={{"--i":46}}></span>
<span style={{"--i":47}}></span>
<span style={{"--i":48}}></span>
<span style={{"--i":49}}></span>


</div> 
  )
}
