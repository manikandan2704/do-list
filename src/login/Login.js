import { useState } from "react";
import "./Login.css";
import  User from "./User.json";
import {useNavigate } from "react-router-dom";
import  Card from "./Card.js";

function Login() {
 const Navigate = useNavigate();
  const [input, setinput] = useState({email:"",passwd:""}) 

const handlechange = (ev) =>{
  setinput({...input,[ev.target.name]:ev.target.value})
}

const handlesubmit = () =>{
  console.log()
  User.find((dev) => {
    if(dev.username===input.email){
      Navigate('Home')
     }
  })
 }
 return (
    <div className=''>
        <h2>Login Page</h2><br></br>
        <div class="login">    
    <form id="login" method="get" action="login.php" >    
        <label><b>User Name     
        </b>    
        </label>    
        <input type="text" name="email" id="Uname" placeholder="Username" onChange={handlechange} />   
        <br></br>    
        <label><b>Password     
        </b>    
        </label>    
        <input type="Password" name="Passwd" id="Pass" placeholder="Passwordd" onChange={handlechange}/>   
        <br></br>    
        <input type="button" name="log" id="log" value="Log In" onClick={handlesubmit}/>       
        <br></br>    
        <input type="checkbox" id="check"></input>    
        <span>Remember me</span>    
        <br></br>     
    </form>     
</div> 
    </div>
  )
  
}

export default Login;
