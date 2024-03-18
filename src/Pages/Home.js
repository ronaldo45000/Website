import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(true);
    };
  return (
    <div>
      <h1 id ="home">Ace Homepage</h1>
      <img id="log1"src= "log1.png"></img>
      <p id="p1"> 
      <p>
      •	Develop a login app that helps users to build their resume and list the things they want to do onto a table. 
      </p>
      <p>
      It is useful to users as they can go back to look up what they wrote before to access and track their information.
      </p>
      </p>
      <img id = "d1"src= "d1.png"></img>
      <p id="p2"> 
      <p>
      •	Developed front end and back end for drawing app to help users to draw 
     or sketch something they want. 
      
      </p>
      
      <p>
      	Developed tools such as pencils, colors, and different shapes that users 
      choose the right tool for their needs and switch between them effortlessly.
      
      </p>
      </p>
      <img id ="Lgin"src= "Lgin.png"></img>
      <img id ="Lgin2"src= "docTab.png"></img>
      <img id ="Lgin3"src= "budgetTab.png"></img>
      <h1 id="p3">
        <ol> <li> Develop a login app that helps users to build their resume and list the things they want to do onto a table. 
        </li> 
        <li> It is useful to users 
      as they can go back to look up what they wrote before to access and track their information.
      </li>
      </ol>
      </h1>
     {/* <button id="start" onClick={handleClick}>
       Get Started
     </button> */}
     <button id="start">
        <Link id = "3"to="/About">  <h1 id= "unique3">Click Here to Get Started</h1></Link>
      </button>
    </div>
  );
};