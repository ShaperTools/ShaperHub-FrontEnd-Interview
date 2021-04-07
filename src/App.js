import styled from "styled-components";
import React from "react";
import Select from "./components/select.js";
import Project from "./components/projectCard.js";
import projectData from "./data.js";

const Page = styled.div`
	color: black;
	font-family: "IBM Plex Sans";
	font-size: 18px;
	width: 100vw;
	height: 100vh;
	padding: 24px;
`;

const Projects = styled.div`
	padding: 24px;
`;

const Header = styled.div`
	font-size: 32px;
`;

const App = () => (
	<Page>
		<Header>Explore ShaperHub Projects</Header>
		<Select
			heading={"Sort By"}
			options={[
				{ text: "Most Recent", value: "date" },
				{ text: "By Title", value: "title" },
				{ text: "By Creator", value: "creatorName" },
			]}
		/>
		<Projects>
			{projectData.map((project) => (
				<Project
					imageUrl={project.image.url}
					title={project.title}
					subTitle={`By ${project.creatorName}`}
				/>
			))}
		</Projects>
	</Page>
);

export default App;
