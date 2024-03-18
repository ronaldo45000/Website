import React from "react";
import { FaGithubAlt } from "react-icons/fa6";

export const Contact = (props) => {
  
    const sendEmail = (e)=>{
        e.preventDefault();
    }
  return (
<div className="App">

      <h1 className="page__title">Contact </h1>
      <form className="contact__form">
      <label htmlFor="emailFrom">Name:</label>
        <input type="text" name="email_from" id="emailFrom" className="email__from" placeholder="Your name"/>
        <label htmlFor="emailFrom">Email:</label>
        <input type="text" name="email_from" id="emailFrom" className="email__from" placeholder="person@example.com"/>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" className="message__box" placeholder="Write something"></textarea>
        <button id="start">
      Send
      </button>
      
      </form>

      <div className="card">
      <div className="top">
        <h2 className="name">Thinh Le</h2>
        <img className="circle-img" src="icon.jpg" alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">Onme7052@gmail.com</p>
        <p className="info">123 456 789</p>
      </div>
    </div>
    
    <a href="https://github.com/ronaldo45000"id="git"> <FaGithubAlt className ="icon"size={150}/>
    </a>
    <a href="https://github.com/ronaldo45000"id="git">Github</a>
    </div>
   
    
  
  );
};