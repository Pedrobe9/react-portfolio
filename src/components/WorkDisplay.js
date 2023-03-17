import React from "react";
import Card from "./Card";
import Wrapper from "./Wrapper";
import Title from "./Title";
import WorkList from "../workList.json";

function WorkDisplay () {
    const projectList = WorkList.map(project => <Project {...project} key={character.id} />)
    return (
      <div data-test='app-container'>
        <h1 className="site-title" data-test='site-title'>Work Projects</h1>
        <CharacterGallery />
      </div>
    );
  };
  
  export default App;