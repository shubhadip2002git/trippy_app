import React from 'react'
import "./Book.css"

import Navbar from '../component/Navbar'
 import Hero from '../component/Hero'

import video from "../assets/bg5.jpg"
import Footer from "../component/Footer"


const Book = () => {
  return (
    <>
    <Navbar/>
     <Hero
        cname="about-hero"
        heroImg={video}
        btnclass="about-btnclass"
        title="Hope Your Journey Would be Beauty"
     />
        
<div className="wrapper rounded bg-gray">

<div className="h3 my-2">Book your Package here</div>

<div className="form">
    <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
            <label>First Name</label>
            <input type="text" className="form-control" required/>
        </div>
        <div className="col-md-6 mt-md-0 mt-3">
            <label>Last Name</label>
            <input type="text" className="form-control" required/>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
            <label>Date</label>
            <input type="date" className="form-control" required/>
        </div>
        <div className="col-md-6 mt-md-0 mt-3">
            <label>Gender</label>
            <div className="d-flex align-items-center mt-2">
                <label className="option">
                    <input type="radio" name="radio"/>Male
                    <span className="checkmark"></span>
                </label>
                <label className="option ms-4">
                    <input type="radio" name="radio"/>Female
                    <span className="checkmark"></span>
                </label>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
            <label>Email</label>
            <input type="email" className="form-control" required/>
        </div>
        <div className="col-md-6 mt-md-0 mt-3">
            <label>Phone Number</label>
            <input type="tel" className="form-control" required/>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
            <label>Cupon Code</label>
            <input type="email" className="form-control" placeholder='Add here code' required/>
        </div>
        <div className="col-md-6 mt-md-0 mt-3">
        <label>Subject</label>
        <select id="sub" required>
            <option value="" selected hidden>Choose Option</option>
            <option value="Weekend">Weekend</option>
            <option value="Summer vacation">Summer vacation</option>
            <option value="Winter Vacation">Winter Vacation</option>
            <option value="Other">Other</option>
        </select>
        </div>
    </div>
    <div className=" my-md-2 my-3">
            
    </div>
    <div className="btn btn-primary mt-3">Submit</div>
</div>

</div>

<Footer/>
          
      
    </>
  )
}

export default Book
