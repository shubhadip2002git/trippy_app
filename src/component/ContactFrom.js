import React, { useState } from 'react'
import "./ContactFrom.css"
import { useAuth0 } from "@auth0/auth0-react";
import myimg from "../assets/profile3.png"

export default function ContactFrom() {

  const { isAuthenticated,user} = useAuth0();

  const [text,setText]=useState("");
  const [text1,setText1]=useState("");
  const [text2,setText2]=useState("");

  const handleUp =()=>{

    if(text===""){
        alert('Please Write Something For Me ')
    }
         
         else{setText("");
            alert(`Hey ${isAuthenticated ? user.name : ""} Thank You 👍 For Give Rating`);}
         
  }
  const handleLp =()=>{
         
         setText("");
           
         
  }
  const clickUp1 =()=>{
         
      if(text1===""){
        alert('please write somthing For Us');
      }   
    
      else{alert(`Hey ${isAuthenticated ? user.name : ""} We Have Recevied 👍 Your Messege`);
         setText1("");
         setText2("");}
           
         
  }

  const changeUp = (e) =>{
         setText(e.target.value);
  } 
  const changeUp1 = (e) =>{
         setText1(e.target.value);
  } 
  const changeUp2 = (e) =>{
         setText2(e.target.value);
  } 
  


  return (
    <>
      <div className='context'>
         <h1>Send a Message To Us!!</h1>

         <div className="pic">
        {isAuthenticated && <img src={user.picture} alt="" />}
        </div>
         
    </div>

       
        <div className='confrom'>
        <form>
             <input type="text" placeholder='Name' value={isAuthenticated ? user.name : ""}  autoComplete="off" required/>
             <input type="email" placeholder='Email'  value={isAuthenticated ? user.email : ""} />
             <input type="text" placeholder='Subject' value={text1} onChange={changeUp1}/>
             <textarea rows="4" placeholder='Message' value={text2} onChange={changeUp2}></textarea>
            
        </form>
        
        <div className="buttoon">
        <button className="btn btn-primary" onClick={clickUp1}>Send</button>
        </div>
        
         
        <div className="ccard">
               
               <div className="row">
                   
                   <div className="col-2">
                       
                       
                       <img src={myimg} width="70" className="rounded-circle mt-0"/>
                   
                   
                   </div>
                   
                   <div className="col-10">
                       
                       <div className="comment-box ml-2">
                           
                           <h4>Please rating here with your opinion</h4>
                           
                           <div className="rating"> 
                               <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label>
                               <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                               <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label>
                               <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label>
                               <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                           </div>
                           
                           <div className="comment-area">
                               
                               <textarea className="form-control" placeholder="what is your view?" rows="4" value={text} onChange={changeUp}></textarea>
                           
                           </div>
                           
                           <div className="comment-btns mt-2">
                               
                               <div className="row">
                                   
                                   <div className="col-6">
                                       
                                       <div className="pull-left">
                                       
                                       <button className="btn btn-success btn-sm" onClick={handleLp}>Cancel</button>      
                                           
                                       </div>
                                   
                                   </div>
                                   
                                   <div className="col-6">
                                       
                                       <div className="pull-right">
                                       
                                       <button className="btn btn-success send btn-sm"  onClick={handleUp}>Send <i className="fa fa-long-arrow-right ml-1"></i></button>      
                                           
                                       </div>
                                   
                                   </div>
                               
                               </div>
                           
                           </div>
                       
                       
                       </div>
                   
                   </div>
               
               
               </div>
     
           </div>


        </div>
        
    </>
  )
}
