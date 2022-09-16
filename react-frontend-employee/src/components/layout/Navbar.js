import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (

     
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand " exact="true" to="/">
          Employees 
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link"exact="true" to="/">
                Home
              </NavLink>

            </li>
             <li className="nav-item">
            <NavLink className="nav-link" exact="true" to="/add/employee">
          Add employee
        </NavLink>
        </li>
        
          </ul>
        </div>
      </div>
    </nav>

    

   
  );
};

export default Navbar;
