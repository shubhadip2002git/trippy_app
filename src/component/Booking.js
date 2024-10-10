import React from 'react'
import { Link } from 'react-router-dom'

import { BookingFile } from './BookinFile'
import "./Booking.css"
export default function Booking() {
  return (
    <>
    <div className="book">
        <h1>Choose Your Favourite Destination With good Package here</h1>
    </div>

    <div className="main-container">
    {

        BookingFile.map((ele,index)=>{

            return(
                <div className="card" style={{width:"18rem"}} key={index}>
                    <img src={ele.bookimg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title"><i className='fas fa-map-marker-alt'></i>&nbsp;<span>{ele.title}</span></h5>
                        <p className="card-text">{ele.text}</p>
                        <h5 className="card-title"><i className="fa fa-dollar"></i>&nbsp;<span>{ele.price}</span></h5>
                        <h5 className="card-title"> {ele.star}</h5>
                        
                        <Link to={`/services/${ele.id}`} target='..' className="btn btn-primary">Details</Link>
                    </div>
                </div>
            )

        })

    }
    </div>


      
    </>
  )
}
