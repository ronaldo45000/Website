import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(true);
    };
  return (
    <div id="wrapper">
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
      <img id = "d1"src= "2dGame.png"></img>
      <p id="p2"> 
      
      <p id="p2d">
      •	This is 2d game that Implemented player movement controls, dash mechanics, and skill systems. Designed and programmed bosses 
      and enemy AI for dynamic combat encounters. Integrated health 
      bars and collision detection for realistic gameplay.
      
      </p>
      
      <p>
    
      
      </p>
      </p>
      <img id ="Lgin"src= "Lgin.png"></img>
      <img id ="Lgin2"src= "docTab.png"></img>
      <img id ="Lgin3"src= "budgetTab.png"></img>
      <h1 id="p3">
        <ol id = 'p2d6' > <li> Develop a login app that helps users to build their resume and list the things they want to do onto a table. 
        </li> 
        <li> It is useful to users 
      as they can go back to look up what they wrote before to access and track their information.
      </li>
      </ol>
    <img id ="Lgin4"src= "tool.png"></img>
    <img id ="Lgin5"src= "pokemonDB.png"></img>

    <p id = 'p2d5'> This is the Pokemon Database that Implemented a login system with MySQL integration, allowing users to authenticate credentials.</p> 
    <p id = 'p2d5'> Successfully implemented comprehensive data management functionalities, including 
      robust systems for inserting, updating, 
      deleting, and searching Pokémon information. </p>
      </h1>
     {/* <button id="start" onClick={handleClick}>
       Get Started
     </button> */}
     <button id="unique3">  
        <Link to="/About"> Click Here to Get Started</Link>
      </button>
    </div>
  );
};