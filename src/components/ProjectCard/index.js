import React from "react";
import "./style.css";

//Card showing image, title, GitHub link and link of deployment
function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
          <a href={props.githubLink} className="mt-auto btn btn-primary">GitHub  Repository</a>
          </li>
          <li>
          <a href={props.link} className="mt-auto btn btn-primary">Deployed Application</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;