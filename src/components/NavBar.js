import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './NavBar2.css';

function NavBar(){
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
    <nav>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img id= 'lion'src= "lion.png"></img>
            
            <span id = "ace" >Ace</span>
          
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              ><h1 id="unique">
                Home </h1>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              ><h1 id="unique">
                About </h1>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              ><h1 id="unique">
                Links </h1>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/Contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              > <h1 id="unique">
                Contact </h1>
              </Link>



            </li>

            <li className="nav-item">
              <Link
                exact
                to="/About2"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              ><h1 id="unique">
                ToDo </h1>
              </Link>



            </li>

          </ul>
        

         
              
           
          </div>
        
         
      </nav>
          <div id="next">
            <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <h1 id="unique2">
                Home</h1>
              </Link>
        
        
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              <h1 id="unique2">
                About</h1>
              </Link>
          
              <Link
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              ><h1 id="unique2">
                Links </h1>
              </Link>
       
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              ><h1 id="unique2">
                Contact </h1>
              </Link>
              <Link
                exact
                to="/About2"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              ><h1 id="unique2">
                ToDo </h1>
              </Link>
             
              </div>
             
      </nav>
    </>
    )
}

export default NavBar;