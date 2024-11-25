import React, { useState,useRef,useEffect   } from "react";
import axios from "axios";
import { FaGithubAlt } from "react-icons/fa6";
import '../components/NavBar2.css';
import emailjs from '@emailjs/browser';

export const Contact = (props) => {
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    // Fetch initial count from the server
    axios.get('http://localhost:5000/api/count')
        .then((response) => setClickCount(response.data.count))
        .catch((error) => console.error('Error fetching count:', error));
}, []);


 const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault();

  // Increment count
  axios.post('http://localhost:5000/api/increment')
  .then(() => {
      setClickCount((prevCount) => prevCount + 1);
      console.log('Count incremented');
  })
  .catch((error) => console.error('Error incrementing count:', error));
   emailjs.sendForm(process.env.REACT_APP_key1, process.env.REACT_APP_key2, form.current, {
       publicKey: process.env.REACT_APP_key3,
     })
     .then(
       () => {
         console.log('SUCCESS!');
       },
       (error) => {
         console.log('FAILED...', error.text);
       },
     );
 };

 return (
  <div className="App">
     <h1 className="page__title">Contact</h1>
   <form className="contact__form" ref={form} onSubmit={sendEmail}>
     <label>Name</label>
     <input type="text" name="user_name" 
     placeholder="Fill out your name"
     />
     <label>Email

      
     </label>
     <input type="email" name="user_email"
      placeholder="Onme7052@gmail.com"
     />
     <label>Message</label>
     
     <textarea name="message" 
     placeholder="Write something"
     />
     <input type="submit" id="start" value="Send" />
   
     <label className="info2">Numbers of Sent Message: {clickCount} times</label>
   </form>
          <div className="card">
         <div className="top">
           <h2 className="name">Thinh Le</h2>
           <img className="circle-img" src="icon.jpg" alt="avatar_img" />
         </div>
         <div className="bottom">
           <p className="info">Onme7052@gmail.com</p>
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




//////////////////////////////////////////////////////////////////////////////////





// import React, { useState,useRef,useEffect   } from "react";
// import axios from "axios";
// import { FaGithubAlt } from "react-icons/fa6";
// import '../components/NavBar2.css';
// import emailjs from '@emailjs/browser';

// export const Contact = (props) => {
//   const [clickCount, setClickCount] = useState(0);
//   useEffect(() => {
//     // Fetch initial count from the server
//     axios.get('http://localhost:5000/api/count')
//         .then((response) => setClickCount(response.data.count))
//         .catch((error) => console.error('Error fetching count:', error));
// }, []);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [successMessage, setSuccessMessage] = useState(null);
  // const [failMessage, setfailMessage] = useState(null);

  // const sendEmail = async (e) => {
  //   e.preventDefault();
  
  //   // Regular expression for email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  //   // Check if the email is valid
  //   if (!emailRegex.test(email) || name === '') {
  //     console.error("Invalid email address");
  //     // Optionally, you can display an error message to the user
  //     setSuccessMessage("failed to send message");

  //     return;
  //   }
  
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/submitForm", {
  //       name,
  //       email,
  //       message
  //     });
  
  //     console.log(response.data); // Log the response from the server
  
  //     // Clear the form fields after successful submission
  //     setSuccessMessage("Message sent successfully!");
  
  //     setTimeout(() => {
  //       setSuccessMessage(null);
  //     }, 2000);
  
  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //   }
  // };
  
//   return (
//     <div className="App">
//       <h1 className="page__title">Contact</h1>
//       <form className="contact__form" onSubmit={sendEmail}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="email__from"
//           placeholder="Your name"
//         />
//         <label htmlFor="email">Email:</label>
// <input
//   type="email" // Change type to "email"
//   id="email"
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
//   className="email__from"
//   placeholder="person@example.com"
// />
//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="message__box"
//           placeholder="Write something"
//         ></textarea>
//         <button type="submit" id="start">
//           Send
//         </button>
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         {failMessage && <p className="fail-message">{failMessage}</p>}

//       </form>

//       <div className="card">
//         <div className="top">
//           <h2 className="name">Thinh Le</h2>
//           <img className="circle-img" src="icon.jpg" alt="avatar_img" />
//         </div>
//         <div className="bottom">
//           <p className="info">Onme7052@gmail.com</p>
//         </div>
//       </div>

//       <a href="https://github.com/ronaldo45000" id="git">
//         {" "}
//         <FaGithubAlt className="icon" size={150} />
//       </a>
//       <a href="https://github.com/ronaldo45000" id="git">
//         Github
//       </a>


//     </div>
//   );


//  const form = useRef();

//  const sendEmail = (e) => {
//    e.preventDefault();

//   // Increment count
//   axios.post('http://localhost:5000/api/increment')
//   .then(() => {
//       setClickCount((prevCount) => prevCount + 1);
//       console.log('Count incremented');
//   })
//   .catch((error) => console.error('Error incrementing count:', error));
//    emailjs.sendForm(process.env.REACT_APP_key1, process.env.REACT_APP_key2, form.current, {
//        publicKey: process.env.REACT_APP_key3,
//      })
//      .then(
//        () => {
//          console.log('SUCCESS!');
//        },
//        (error) => {
//          console.log('FAILED...', error.text);
//        },
//      );
//  };

//  return (
//   <div className="App">
//      <h1 className="page__title">Contact</h1>
//    <form className="contact__form" ref={form} onSubmit={sendEmail}>
//      <label>Name</label>
//      <input type="text" name="user_name" 
//      placeholder="Fill out your name"
//      />
//      <label>Email

      
//      </label>
//      <input type="email" name="user_email"
//       placeholder="Onme7052@gmail.com"
//      />
//      <label>Message</label>
     
//      <textarea name="message" 
//      placeholder="Write something"
//      />
//      <input type="submit" id="start" value="Send" />
   
//      <label className="info2">Numbers of Sent Message: {clickCount} times</label>
//    </form>
//           <div className="card">
//          <div className="top">
//            <h2 className="name">Thinh Le</h2>
//            <img className="circle-img" src="icon.jpg" alt="avatar_img" />
//          </div>
//          <div className="bottom">
//            <p className="info">Onme7052@gmail.com</p>
//          </div>
      
//        </div>

//        <a href="https://github.com/ronaldo45000" id="git">
//          {" "}
//          <FaGithubAlt className="icon" size={150} />
//        </a>
//        <a href="https://github.com/ronaldo45000" id="git">
//          Github
//        </a> 
//    </div>

//  )










// import React, { useState,useRef,useEffect   } from "react";
// import axios from "axios";
// import { FaGithubAlt } from "react-icons/fa6";
// import '../components/NavBar2.css';
// import emailjs from '@emailjs/browser';

// export const Contact = (props) => {
//   const [clickCount, setClickCount] = useState(0);
//   useEffect(() => {
//     // Fetch initial count from the server
//     axios.get('http://localhost:5000/api/count')
//         .then((response) => setClickCount(response.data.count))
//         .catch((error) => console.error('Error fetching count:', error));
// }, []);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [successMessage, setSuccessMessage] = useState(null);
  // const [failMessage, setfailMessage] = useState(null);

  // const sendEmail = async (e) => {
  //   e.preventDefault();
  
  //   // Regular expression for email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  //   // Check if the email is valid
  //   if (!emailRegex.test(email) || name === '') {
  //     console.error("Invalid email address");
  //     // Optionally, you can display an error message to the user
  //     setSuccessMessage("failed to send message");

  //     return;
  //   }
  
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/submitForm", {
  //       name,
  //       email,
  //       message
  //     });
  
  //     console.log(response.data); // Log the response from the server
  
  //     // Clear the form fields after successful submission
  //     setSuccessMessage("Message sent successfully!");
  
  //     setTimeout(() => {
  //       setSuccessMessage(null);
  //     }, 2000);
  
  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //   }
  // };
  
//   return (
//     <div className="App">
//       <h1 className="page__title">Contact</h1>
//       <form className="contact__form" onSubmit={sendEmail}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="email__from"
//           placeholder="Your name"
//         />
//         <label htmlFor="email">Email:</label>
// <input
//   type="email" // Change type to "email"
//   id="email"
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
//   className="email__from"
//   placeholder="person@example.com"
// />
//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="message__box"
//           placeholder="Write something"
//         ></textarea>
//         <button type="submit" id="start">
//           Send
//         </button>
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         {failMessage && <p className="fail-message">{failMessage}</p>}

//       </form>

//       <div className="card">
//         <div className="top">
//           <h2 className="name">Thinh Le</h2>
//           <img className="circle-img" src="icon.jpg" alt="avatar_img" />
//         </div>
//         <div className="bottom">
//           <p className="info">Onme7052@gmail.com</p>
//         </div>
//       </div>

//       <a href="https://github.com/ronaldo45000" id="git">
//         {" "}
//         <FaGithubAlt className="icon" size={150} />
//       </a>
//       <a href="https://github.com/ronaldo45000" id="git">
//         Github
//       </a>


//     </div>
//   );


//  const form = useRef();

//  const sendEmail = (e) => {
//    e.preventDefault();

//   // Increment count
//   axios.post('http://localhost:5000/api/increment')
//   .then(() => {
//       setClickCount((prevCount) => prevCount + 1);
//       console.log('Count incremented');
//   })
//   .catch((error) => console.error('Error incrementing count:', error));
//    emailjs.sendForm(process.env.REACT_APP_key1, process.env.REACT_APP_key2, form.current, {
//        publicKey: process.env.REACT_APP_key3,
//      })
//      .then(
//        () => {
//          console.log('SUCCESS!');
//        },
//        (error) => {
//          console.log('FAILED...', error.text);
//        },
//      );
//  };

//  return (
//   <div className="App">
//      <h1 className="page__title">Contact</h1>
//    <form className="contact__form" ref={form} onSubmit={sendEmail}>
//      <label>Name</label>
//      <input type="text" name="user_name" 
//      placeholder="Fill out your name"
//      />
//      <label>Email

      
//      </label>
//      <input type="email" name="user_email"
//       placeholder="Onme7052@gmail.com"
//      />
//      <label>Message</label>
     
//      <textarea name="message" 
//      placeholder="Write something"
//      />
//      <input type="submit" id="start" value="Send" />
   
//      <label className="info2">Numbers of Sent Message: {clickCount} times</label>
//    </form>
//           <div className="card">
//          <div className="top">
//            <h2 className="name">Thinh Le</h2>
//            <img className="circle-img" src="icon.jpg" alt="avatar_img" />
//          </div>
//          <div className="bottom">
//            <p className="info">Onme7052@gmail.com</p>
//          </div>
      
//        </div>

//        <a href="https://github.com/ronaldo45000" id="git">
//          {" "}
//          <FaGithubAlt className="icon" size={150} />
//        </a>
//        <a href="https://github.com/ronaldo45000" id="git">
//          Github
//        </a> 
//    </div>
// );
// };

//);
//};

