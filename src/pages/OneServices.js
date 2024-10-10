import React from 'react'
import { useParams } from 'react-router-dom'
import { BookingFile } from '../component/BookinFile';
import "./Oneservices.css"
// import Destination from "../component/Destination";
import Aboutimg from "../assets/about.jpg"

import DestinationFile from '../component/DestinationFile';
import Navbar from "../component/Navbar"


const OneServices = () => {
    const {services_id}=useParams();
    let obj=BookingFile[services_id];
    

  
  return (
    <>        
      {/* <div className="maintext">
              <h1>WelCome to {obj.title}</h1>
              </div> */}
          
            <div className="main">

            <Navbar/>
            
              
           
           <DestinationFile
              className="text-box-reverse"
              cname="oneservices"
              guest={obj.guest}
              url={obj.url}
              Travel={obj.Travel}
              cost={obj.cost}
              food={obj.food}
              stay={obj.stay}
              dura={obj.Duration}
                heading2={obj.planing}
                heading={`Welcome to ${obj.title} City `}
               img1={obj.extraimg}
               img2={obj.bookimg}
           />

           
           </div> 
         
    
    </>
  )
}

export default OneServices
