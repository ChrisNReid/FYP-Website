import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiJavascript1 } from "react-icons/di";
import { SiAmazonaws, SiOpencv, SiVisualstudiocode, SiNotepadplusplus, SiAtlassian,SiMqtt } from "react-icons/si";
import { FaRaspberryPi, FaLinux, FaWindows } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} sm={4} md={2} className="tech-icons"> {/* Adjust column sizes */}
        <DiPython />
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiAmazonaws /> {/* Add AWS icon */}
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <FaRaspberryPi /> {/* Add Raspberry Pi icon */}
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiOpencv /> {/* Add OpenCV icon */}
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <TbCloudComputing />
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiNotepadplusplus />
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
      <SiMqtt />
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
      <SiAtlassian />
      </Col>

    </Row>
  );
}

export default Techstack;
