import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="top">
            <div>
                <h1>Trippy</h1>
                <p>Choose Your Favourite Destination</p>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-behance-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">Licence</a>
                <a href="/">All Version</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">GitHub</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                 <a href="tel:+91 6294021246"> <i className="fa fa-phone"></i><span>+91 6294021246</span></a>
                <a href="/"><i className="fa fa-user"></i><span>Shubhadip Gorai</span></a>
            </div>
            <div>
                <h4>Other</h4>
                <a href="/">Team of Service</a>
                <a href="/">Status</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Thank You</a>
            </div>
          
        </div>
    </div>
      
    </>
  )
}

export default Footer
