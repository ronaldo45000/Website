import React from "react";
import { Link } from 'react-router-dom';
export const Blog = () => {
  return (
   
    // <div id="blg">
     
    //  <p>Hey</p>
      
    // </div>
    <nav id="navblog">
      
      <section class="section">
    
      
      <div class="section__container2">
        <div class="content">
          <p class="subtitle">HELLO</p>
          <h1 class="title">
            I'm <span>Thinh Le<br />a</span> Web Developer
          
          <p class="description">
            Welcome to my portfolio.
          </p>
          </h1>
          <div class="action__btns">
            <button class="portfolio">  <Link id = "abc"to="/">Portfolio</Link>
            </button>


            <button class="portfolio">
           
        <Link id = "abc"to="/About">Hire Me</Link>
        </button>
      
          </div>
        </div>

        
         <div class="image">
         <h1 id="enj">What I enjoy?</h1>
          <img id= "pc1"src="w.png" alt="profile" />
         
          <a href="https://www.youtube.com/channel/UCCrPfV-lFU5D822SNqKqCxA">   <img id= "yt"src="yt.jpg" alt="profile" />  </a>

          <a href="https://www.facebook.com/profile.php?id=100009257997779">  <img id= "fb"src="fb.png" alt="profile" />   </a>
          <a href="https://github.com/ronaldo45000"> 
          <img id= "fb2"src="gith.png" alt="profile" />
          </a>
          <img id= "lol"src="val.png" alt="profile" />
          <img id= "val"src="lol.jpg" alt="profile" />
        </div> 
       
      </div>
     
    </section>
        
     
      
      </nav>
  );
};