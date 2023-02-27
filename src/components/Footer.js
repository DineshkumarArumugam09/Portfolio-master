import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  // let date = new Date();
  // let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        {/* <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by dinesh kumar</h3>
        </Col> */}
        {/* <Col md="4" className="footer-copywright">
          <h3>copyright © {year}cdsgraphics</h3>
        </Col> */}
        <Col className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                 href="https://wa.me/+916369512094"
              /* href="https://whatsapp.com/dl/" */
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/chezhiyan_adk"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dinesh-kumar-8a3315233/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                 href="https://www.instagram.com/adk_dinesh"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
