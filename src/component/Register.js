import React, { useState } from 'react'

export default function Register(props) {
   
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    
      
    const handleSubmit = (e) => {
            e.preventDefault();
    }
       
  return (
    <>
         <div className="login">
         <div className="box">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
                <input  onChange={(e)=>setName(e.target.val)} type="text" placeholder='Your Name' value={name}/>
                <label htmlFor="email">Email</label>
                <input  onChange={(e)=>setEmail(e.target.val)} type="email" placeholder="Your Email" value={email}/>
                <label htmlFor="email">Password</label>
                <input  onChange={(e)=>setPassword(e.target.val)}  type="password" placeholder="********" value={password}/>
                <button  className='btnn' type='submit'>Register</button>
            </form>
            <button onClick={()=>props.formSwicth("login")}>Already an account ? Login here.</button>
         </div>
         </div>
         </>
  )
}
