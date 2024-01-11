import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="ResuBot"
              description="A Resume Grading and Job Recommendation system leveraging advanced Machine Learning and NLP techniques. Quantifies word score, Grammar score, and numeric score for a given resume. Also recommends 10 jobs. Devised machine learning models, achieving an impressive 73% accuracy rate through rigorous optimization efforts, and
              providing a seamless user interface using React.js."
              ghLink="https://github.com/Raghuvamsi123/Resume-Grading-and-Job-Recommendation-Fall-22"
              demoLink="https://www.youtube.com/watch?v=HAyAWdbnM7g&t=2369s&ab_channel=ArtificialIntelligenceSociety"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Youtube Summarizer Extension"
              description="A YouTube video summarization tool as a browser extension with an integrated button on the YouTube website. The tool utilizes advanced transformer modules to process and summarize video text into a concise format. The backend, powered by a responsive Flask API, ensures efficient functionality, while the frontend features a sleek and intuitive design using HTML, CSS, and Javascript for a user-friendly experience."
              ghLink="https://github.com/Raghuvamsi123/ytsummarizer"
              demoLink="https://github.com/Raghuvamsi123/ytsummarizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mobile Price Classifier"
              description="Developed a mobile price classifier designed to categorize prices into five values, ranging from 0 for the lowest to 5 for the highest. Leveraging over five machine learning models, I successfully achieved a remarkable 95% accuracy through meticulous hyperparameter tuning, employing GridSearchCV to optimize the model's performance. This classifier is equipped to provide accurate categorizations, offering valuable insights into the relative pricing of mobile devices."
              ghLink="https://github.com/Raghuvamsi123/ml_project"
              demoLink="https://colab.research.google.com/drive/1KeGAlOs3QSEiyZ9sTWU2BloeIZIMDTB-"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
