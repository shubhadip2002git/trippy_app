import React, { useState } from 'react'
import "./Login.css"

export default function Login(props) {
   
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
      
    const handleSubmit = (e) => {
            e.preventDefault();
    }
       
  return (
    <>
         <div className="login">
         <div className="box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input  onChange={(e)=>setEmail(e.target.val)} type="email" placeholder="Your Email" value={email}/>
                <label htmlFor="email">Password</label>
                <input  onChange={(e)=>setPassword(e.target.val)}  type="password" placeholder="********" value={password}/>
                <button className='btnn' type='submit'>Login</button>
            </form>
            <button onClick={()=>props.formSwicth("register")}>Don't have an account ? Resister here.</button>
         </div>
         </div>
    </>
  )
}
