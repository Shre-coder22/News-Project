import React, { useState } from "react";
import './Page.css'

export default function Login() {
    const [mail,setMail] = useState('')
    const [pass,setPass] = useState('')
    const handleLogin = () =>{
        console.log(mail,pass)
    }

  return (
    <div className="containerCC">
      <form className="formc">
        <div className="mb-3">
          <label className="form-label align-items-center">
            Enter Email
          </label>
          <input
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="form-control textc"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label align-items-center">
            Enter Password
          </label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="form-control textc"
          />
        </div>
        <button type="submit" onClick={handleLogin} className="btn btn-primary">
          Login!
        </button>
      </form>
    </div>
  );
}
