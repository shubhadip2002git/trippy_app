import "./Navbar.css";
import React, { Component } from "react";
import { ManuItems } from "./ManuItems";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {

    state={clicked : false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    
  render() {

    return (
      <>
        <nav className="NavbarItems">
          <h1 className="Navbar-logo">Trippy</h1>
          <div className="hamburg" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
           
          </div>
          <ul className={this.state.clicked ? "Nvbar-manu active" : "Nvbar-manu"}>
            {ManuItems.map((item, index) => {
              return (
                <li key={index} className="itemm">
                  <NavLink to={item.urll} className={item.cName} >
                    <i className={item.icon}></i>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}

          
            <a href="/singup"><div className="button">
            
            </div></a>
            <a href="/singup"><div className="button2">
            <button className="btn btn-primary">Sing Up</button>
            </div></a>
          </ul>
        </nav>
      </>
    );
  }
}
