import React from "react";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import WorkList from "../workList.json";


function Work () {
    return (
      //Use of Card, Title and Wrapper as seen in course BOOTCAMP:
      // UK-VIRT-FE-PT-12-2022-U-LOLC-TWTH-4, module 14, lesson 2, activity 7.
      <Wrapper>
        <Title>Work Project List</Title>
        {WorkList.map((work) => (
          <ProjectCard
            id={work.id}
            key={work.id}
            title={work.title}
            image={work.image}
            description={work.description}
            link={work.link}
          />
        ))}
      </Wrapper>
    );
}

export default Work;