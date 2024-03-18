import React from "react";
import { TbStackFront } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { TbStackBack } from "react-icons/tb";
export const About = () => {
  return (
    <div className="App">
    <div className="about1">
      <h1 className="ab">About Me</h1>
      <div className="card">
      <div className="top">
        <h2 className="name">Thinh Le</h2>
        <img className="circle-img" src="icon.jpg" alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">Onme7052@gmail.com</p>
        <p className="info">123 456 789</p>
      </div>
      <p id= "para"> I am a full stack developer in making websites. My skils are strong in front end and back end. 
      I am excited to work into a new enviroment that focuses about website development. 
        <p>I am confident to learn fast and improve myself to fit in your project.

        </p>
        </p>
    </div>

      </div>
    
     <h1> My Skills</h1>

   
     <div className="icon2">

     Front End
      <TbStackFront/>
     </div>
     <div className="icon3">
     Back End
     <TbStackBack/>
     </div>

     
   

   
     <div className="card2"><p>nodejs, mysql,python 
      <p>java</p> </p>
     <div className="card3">html,css,js,react
     <div className="card4">github

     </div>
     
     <div className="card5">Others  <FaPlus/> </div>
     </div>
     </div>
    </div>
   
   
  );
};