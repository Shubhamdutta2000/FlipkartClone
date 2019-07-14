import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

                    {/* Font awesome icons importing

                         ADD THE CDN FOR USING ICONS HERE 

                         */}

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar" >

                              {/* Name of Project (on left side)*/}
    <div className="navbar-brand center-align">
          <NavLink role="button" className="navbar-item navlinks" exact activeStyle={{ color: "greenyellow", backgroundColor:"#001730"}}  to="/"> 
                      Flickart   
          </NavLink>  
     </div>

                                        {/* SEARCH BAR*/}

    <div id="Search" >
                
          <input className="input is-rounded is-hovered center-align" type="text" placeholder="Search"></input>                                      
    </div>

                                        {/* The Elements to be shown on right side */ }      
        
        <div className="navbar-end center-align" >

            <NavLink role="button" className="navbar-item navlinks" exact activeStyle={{ color: "greenyellow", backgroundColor:"#001730" }} to="/cart"> 
                  Cart
            </NavLink>

            <NavLink role="button" className="navlinks navbar-item" exact activeStyle={{ color: "greenyellow" ,backgroundColor:"#001730" }}  to="/login">
                  Login 
            </NavLink>
            
            <NavLink role="button" className="navbar-item navlinks" exact activeStyle={{ color: "greenyellow", backgroundColor:"#001730" }}  to="/signup">
                  Signup
            </NavLink>
            
            <NavLink role="button" className="navbar-item navlinks" exact activeStyle={{ color: "greenyellow" ,backgroundColor:"#001730" }}  to="/about"> 
                  About
             </NavLink>
        
        </div>
      
      </div>
    );
  }
}
