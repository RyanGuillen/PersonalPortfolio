import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Ryan Guillen </span>
            from <span className="purple"> Union, New Jersey.</span>
            <br />
            I am currently employed as a desktop support technician.
            <br />
            I am on my journey to earning my Bachelor's Degree, and am thinking about going for my Maters Degree.
            <br />
            <br />
            Aside from coding, here are some of my hobbies that I do on my free time!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing the Guitar and Drums
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography and Video Editing
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
