import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import excelclone from "../../Assets/Projects/excelclone.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import herkahani from "../../Assets/Projects/herkahani.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce App"
              description="Our eCommerce application is a modern and secure platform built using JavaScript, Node.js, Express.js, React, JWT authentication, RESTful APIs, MongoDB,etc. It offers a seamless shopping experience for both customers and administrators."
              ghLink="https://github.com/Taranable/ecommerce-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={herkahani}
              isBlog={false}
              title="Herkahani.com"
              description="clients podcast web page build with bootstrap and Tailwind Css which takes the content from spotify playlist and notifications "
              ghLink="https://github.com/Taranable/Herkahani"
              demoLink="https://herkahani.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={excelclone}
              isBlog={false}
              title="Excel Clone"
              description="Excel clone is a web-based spreadsheet application built using HTML, CSS, and JavaScript. It provides users with a familiar interface similar to Microsoft Excel, allowing them to perform various tasks such as data entry, calculations, and data manipulation directly in the browser with Spreadsheet Grid,Cell Formatting and Formulas and Functions "
              ghLink="https://github.com/Taranable/excel-clone"

            />
          </Col>


        </Row>
      </Container>
      <div className="arrow-icon"></div>
    </Container>
  );
}

export default Projects;
