import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineBook, AiOutlineCode   } from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    updateNavbar(window.scrollY >= 20);
  }

  window.addEventListener("scroll", scrollHandler);

  // Smooth scrolling to a section
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar justify-content-center"} // Center the navbar
    >
      <Container>
          <Navbar.Brand href="/" className="d-flex">
            <span style={{ fontWeight: "bold", fontSize: "24px" }}>FYP by Chris Reid</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >


          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  updateExpanded(false);
                  scrollToSection("home"); // Scroll to the home section
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  updateExpanded(false);
                  scrollToSection("analysis"); // Scroll to the analysis section
                }}
              >
                <AiOutlineBook  nuBook style={{ marginBottom: "2px" }} /> Analysis
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  updateExpanded(false);
                  scrollToSection("analysis"); // Scroll to the analysis section
                }}
              >
                <AiOutlineCode  style={{ marginBottom: "2px" }} /> Implementation
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  updateExpanded(false);
                  scrollToSection("analysis"); // Scroll to the analysis section
                }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Testing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  updateExpanded(false);
                  scrollToSection("analysis"); // Scroll to the analysis section
                }}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Evaluation
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
