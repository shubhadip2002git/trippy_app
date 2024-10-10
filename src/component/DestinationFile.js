import "./Destination.css";


import React, { Component } from 'react'

export default class DestinationFile extends Component {
  render() {
    return (
      <>

 <div className={this.props.className}>
        <div className="des">
          <h3>{this.props.heading}</h3>
          <p>
            {this.props.heading2}
          </p>
          <div className={this.props.cname}>
          <h5>{this.props.Travel}</h5>
          <h5>{this.props.dura}</h5>
          <h6>{this.props.stay}</h6>
          <h5>{this.props.food}</h5>
          <h5>{this.props.guest}</h5>
          <h4>{this.props.cost}</h4>
           <a href="/booking"><button className="btn btn-warning ">Booking Now</button></a>
           <a href={this.props.url} target="..."><button className="btn btn-primary mx-4">About City</button></a>
           
           </div>
        </div>
          <div
              className="img-box">
            <img src={this.props.img1} alt="1st img" />
            <img src={this.props.img2} alt="1st img" />    
            </div>
           
            
    </div>
        
      </>
    )
  }
}
