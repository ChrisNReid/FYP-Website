import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Particle from "../Particle";
import funcreqImg from "../../Assets/funcreq.png";
import nonfuncreqImg from "../../Assets/nonfuncreq.png";
import badqualImg from "../../Assets/badqual.png";
import oboccImg from "../../Assets/obocc.png";

function Analysis() {
  return (
    <Container fluid className="home-about-section" id="Analysis">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="home-about-description text-center">
            <h2 style={{ fontSize: "2.6em", marginBottom: "10px" }}>
              Analysis
            </h2>
            <p className="home-about-body">
              Installing a camera above doorways and utilizing object recognition to count people entering and exiting can determine if anyone remains in a building post-evacuation, posing security or health risks.
              <br /><br />
              Benefits include increased recognition and accuracy due to the camera's proximity to object instances. As there is a focus on recording only doorways protects individual privacy once outside the camera's view. Additionally, its low financial cost enhances feasibility, especially for smaller organizations.
              <br /><br />
              However, this approach presents computational challenges. Operating in doorways, two methods are possible: deploying two systems, one on each side, or a single system for both entry and exit monitoring. Challenges also arise from general human behavior, such as users turning away from doorways, impacting safety assessments.
              <br /><br />
              This solution addresses other downfalls, being more legally, socially, and ethically acceptable by not mass monitoring behavior, compared to a mass building monitoring system. Anonymized data storage and limited identification reduce legal risks aid this. Algorithmic model bias may lead to discrimination, emphasizing the need for continuous technological improvement.
              <br /><br />
              The success of the system can be pre-emptively assessed by ensuring it meets requirements and addresses the problem statement. Evaluating it against feasibility, desirability, and viability keeps the project focused and relevant. The system's ability to utilize large public databases and conduct non-intrusive data recording, without uniquely identifying people, addresses the current problem. It is also scalable to uniquely identify people if needed, although this would require more diligent storage and security measures, along with communication to stakeholders regarding security, privacy laws, and ethics. Additionally, this solution is financially viable, as normal cameras are considerably cheaper than thermal imaging cameras.
            </p>
       
            <Row className="justify-content-center">
              <Col md={6}>
                <figure style={{ textAlign: 'center' }}>
                  <img src={funcreqImg} alt="Functional Requirements" style={{ width: '100%' }} />
                  <figcaption>Functional Requirements</figcaption>
                </figure>
              </Col>
              <Col md={6}>
                <figure style={{ textAlign: 'center' }}>
                  <img src={nonfuncreqImg} alt="Non-functional Requirements" style={{ width: '100%' }} />
                  <figcaption>Non-functional Requirements</figcaption>
                </figure>
              </Col>
            </Row>

            <br /><br />
            <h4 style={{ fontSize: "2.0em", marginBottom: "10px" }}>
              Technical Challenges
            </h4>

            <p className="home-about-body">
              A brief overview of the foreseen challenges and consideration of a computer vision people counting/tracking system. Challenges can be split into non-technical challenges; including human behavior, evacuation tracking challenges etc... and technical challenges which includes software and hardware challenges. This section will be covered again in more depth within 5.
            </p>

            <Row className="justify-content-center">
              <Col md={12}>
                <Carousel style={{ maxWidth: '50%', margin: 'auto' }}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badqualImg}
                      alt="Bad Quality"
                    />
                    <Carousel.Caption>
                      <h3>Bad Quality</h3>
                      <p>Explanation about bad quality image.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={oboccImg}
                      alt="Object Occlusion"
                    />
                    <Carousel.Caption>
                      <h3>Object Occlusion</h3>
                      <p>Explanation about object occlusion.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Analysis;
