import React, { useState } from "react";
import Home from "./Home";
// import Start from "./Start";
import "./Signup.css"




function Login() {

    const [lastNameLog, setLastNameLog] = useState("");
    const [emailLog, setEmailLog] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);


    const handleLogin = (e) => {
        e.preventDefault();
        let nail = localStorage.getItem("LastName").replace(/"/g, "");
        let pass = localStorage.getItem("Email").replace(/"/g, "");
        




        if (!lastNameLog || !emailLog){
            setFlag(true);
            console.log("empty");
        }else if(emailLog !== pass  ||  lastNameLog !== nail ){
            setFlag(true);
        }else{
            setHome(!home);
            setFlag(false);
        }

        }
    
   return (

   <div >
    <div className="guy">
    
    {home ? (
    <form  onSubmit={handleLogin} className="form2 mt-5">

        <h2>Log In</h2>
    <input type="text" className="form-control mb-2 " placeholder="Last Name"
    onChange={(e) => setLastNameLog(e.target.value)}/>

    <input type="email" name="" id=""className="form-control mb-2" placeholder="Email" 
    onChange={(e) => setEmailLog(e.target.value)}/>
     <button type="submit" className="btn1 btn btn-success mb-3">Log In</button>
     

     {flag &&(
          
          <div className="alert alert-danger" role={"alert"}>
            please fill correct info
          </div>
    

      )}
      

    </form>
    ):(
        <Home/>
    )}
  </div>
   </div>
   )
    
}
export default Login;