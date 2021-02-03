import styled from "styled-components";
import React from "react";
import ProjectCard from "./components/projectCard.js";
import projects from "./data/projects.js";

const Page = styled.div`
  display: flex;
`;

const App = () => <Page>/* render project cards here */</Page>;

export default App;
