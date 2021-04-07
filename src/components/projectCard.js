/* @flow */

import React from "react";
import styled from "styled-components";

const aspectRatio = 5 / 4;

const Card = styled.div`
	border: 1px solid lightgray;
	border-radius: 8px;
	padding: 12px 12px 16px;
	width: 300px;
`;

const HeroShot = styled.div`
	padding-top: ${100 / aspectRatio}%;
	position: relative;
	width: 100%;

	img {
		border-radius: 4px;
		height: 100%;
		left: 0;
		object-fit: cover;
		position: absolute;
		top: 0;
		width: 100%;
	}
`;

const Title = styled.span`
	font-family: sans-serif;
	font-size: 22px;
	letter-spacing: 0.15px;
	line-height: 1.3;
	overflow: hidden;
	padding-top: 8px;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

const SubTitle = styled.div`
	font-family: sans-serif;
	font-size: 15px;
	line-height: 1.33;
`;

const ProjectCard = ({
	imageUrl,
	title,
	subTitle,
}: {
	imageUrl: string,
	title: string,
	subTitle: any,
}) => {
	return (
		<Card>
			<HeroShot>
				<img src={imageUrl} alt={title} />
			</HeroShot>
			<Title>{title}</Title>
			<SubTitle key="subTitle">{subTitle}</SubTitle>
		</Card>
	);
};

export default ProjectCard;
