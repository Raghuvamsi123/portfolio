import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raghuvamsi Ananthu </span>
            from <span className="purple"> Dallas, Texas, United States.</span>
            <br />
            I am currently pursuing Masters in <span className="purple">Computer Science</span> at The University of Texas at Dallas.
            <br />
            I have completed B.Tech Computer science at Indian Institute of Information Technology Kottayam.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Raghuvamsi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
