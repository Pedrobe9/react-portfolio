import React from "react";
//import '../../workList.json'
import "./style.css";

//Card showing image, title, GitHub link and link of deployment 
//to display images in github pages also use 'process.env.PUBLIC_URL' (no quotes) in src (before +pros.image)
// also, to display images in github pages: './react-portfolio' in src (before +pros.image)
//Previous methods failed. Now hosted on the web:
function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} alt={props.title} />
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
