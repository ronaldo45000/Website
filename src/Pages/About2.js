import React , { useState } from "react";
import { TbFileTypeSql } from "react-icons/tb"
import {
  SiVisualstudiocode,
  SiPostman,

  SiIntellijidea ,
  SiPycharm ,
  SiEclipseide 
} from "react-icons/si";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
export const  About2 = () =>{
 

  
    const [inputText, setInputText] = useState('');
    const [textList, setTextList] = useState([]);
  
    const handleInputChange = (e) => {
      setInputText(e.target.value);
    };
  
    const handleAddText = () => {
      if (inputText.trim() !== '') {
        setTextList([...textList, inputText]);
        setInputText('');
      }
    };
    const handleClearAll = () => {
        setTextList([]);
      };
    return (

      <Container fluid className="about-section">

        <div className="container2">
            <div className="heading">
            <h1>To-Do List</h1>
            <div className="form">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text..."
        />
        <button id="add" onClick={handleAddText}>Add</button>
        <button id="add" onClick={handleClearAll}>Clear All</button>
          {textList.map((text, index) => (
            < p key={index}>{text}</p>
          ))}
       
        </div>

        </div>
        <h1 className="project-heading">
          <strong className="yellow">Tools I use </strong> 
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} id="vis" className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} id="vis2" className="tech-icons">
        <SiPycharm  />
      </Col>
      <Col xs={4} md={2} id="vis3" className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} id="vis4" className="tech-icons">
        <TbFileTypeSql />
      </Col>
      <Col xs={4} md={2} id="vis5" className="tech-icons">
        <SiEclipseide />
      </Col>
    </Row>
      </div>
      </Container>
    );
  };
  
  
