import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>


         I am Graduated from <span className="purple"> Guru Gobind Singh Indrapratha University</span>, New Delhi.  I am currently employed as a MERN Stack web developer at <span className="purple"> Softure Solutions Private Limited.</span> where i start from building basic websites progressively i worked on <span className="purple">e-commerce web application</span>  where i learn about  <span className="purple">how backend works ,frameworks necessity , APIs Integration</span> & very important to manage a large scale codebase with <span className="purple">MVC Architecture</span> , when it comes to side hustle my latest project speaks everthing which is a fully functional dynamic e-commerce platform using <span className="purple">React.js, Node.js, express.js, RESTful APIs and MongoDB</span> from scratch resulting in depth knowledge gain.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Committed to staying up-to-date with the latest trends, tools, and best practices."{" "}
          </p>
          <footer className="blockquote-footer">Taranpreet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
