import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Particle from "../Particle";


function Overview() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center"> {/* Center the row */}
          <Col md={8} className="home-about-description text-center"> {/* Center the column */}
            <h2 style={{ fontSize: "2.6em", marginBottom: "20px" }}>
              Overview
            </h2>
            <p className="home-about-body">
              This study focuses on solving two problems: accurate building occupancy calculation and technologically cohesive environments in smart buildings.
              <br />
              <br />
              Developing an automated solution for monitoring building occupancy levels, specifically designed to assist in safe evacuations during emergencies, is crucial. An accurate solution for this issue would not only expedite safety measures but could also be instrumental in saving lives.
              <br />
              <br />
              The project addresses this by using strategically placed hardware and artificial intelligence to accurately capture data on people's movements, calculating the number of people in a building, and transmitting it to a cloud platform. The use of the newly created "Matter" protocol and cloud platform allows for real-time scalable, reliable, and cohesive analysis for fire and safety personnel.
              <br />
              <br />
              This study involves extensive research into pertinent areas of computer science and engineering solutions, exploring potential current and future applications, and potential technical and non-technical challenges. Upon finalizing a chosen solution, the project discusses its implementation and evaluates the results, prioritizing the specific metric, Recall, achieving a value of 95%. The conclusion emphasizes the global and personal impact of this project and identifies areas for further improvement and optimization.
            </p>
          </Col>
        </Row>
        
        <Container fluid className="about-section">
          <Particle />
            <h1 className="project-heading">Tools used</h1>
            <Techstack />
        </Container>
      </Container>
    </Container>
  );
}

export default Overview;
