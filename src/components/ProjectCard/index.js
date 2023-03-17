import React from "react";
import "./style.css";

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
          <a href={props.link} className="mt-auto btn btn-primary">Go to Deployed Application</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
