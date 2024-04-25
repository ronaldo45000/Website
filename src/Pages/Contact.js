import React, { useState } from "react";
import axios from "axios";
import { FaGithubAlt } from "react-icons/fa6";

export const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/submitForm", {
        name,
        email,
        message
      });
      console.log(response.data); // Log the response from the server
      // Clear the form fields after successful submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="App">
      <h1 className="page__title">Contact</h1>
      <form className="contact__form" onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="email__from"
          placeholder="Your name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email__from"
          placeholder="person@example.com"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="message__box"
          placeholder="Write something"
        ></textarea>
        <button type="submit" id="start">
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

      <a href="https://github.com/ronaldo45000" id="git">
        {" "}
        <FaGithubAlt className="icon" size={150} />
      </a>
      <a href="https://github.com/ronaldo45000" id="git">
        Github
      </a>
    </div>
  );
};
