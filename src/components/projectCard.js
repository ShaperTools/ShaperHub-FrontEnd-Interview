/* @flow */

import React from "react";
import styled from "styled-components";

const aspectRatio = 5 / 4;

const Card = styled.div`
  display: block;
  padding: 0 6px 0;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.24);
  margin: -12px -6px -16px;
  padding: 12px 12px 16px;
  width: 100px;
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

const ProjectInfo = styled.div`
  padding-top: 8px;
`;

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 0 0 8px;
`;

const Title = styled.span`
  font-family: "IBM Plex Sans";
  font-size: 22px;
  letter-spacing: 0.15px;
  line-height: 1.3;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SubTitle = styled.div`
  display: flex;
  font-family: "IBM Plex Sans";
  font-size: 15px;
  justify-content: space-between;
  line-height: 1.33;
  margin: 0;
  padding: 0;
`;

const Link = styled.a`
  text-decoration: none;
`;

const ProjectCard = ({
  className,
  imageUrl,
  title,
  subTitle,
  linkUrl,
}: {
  className: string,
  linkUrl: string,
  imageUrl: string,
  title: string,
  subTitle: any,
  className: string,
}) => {
  return (
    <Card className={className}>
      <HeroShot>
        <img src={imageUrl} alt={title} />
      </HeroShot>
      <Link href={linkUrl}>
        <ProjectInfo key="info">
          <TitleWrapper key="title-wrap">
            <Title>{title}</Title>
          </TitleWrapper>
          <SubTitle key="subTitle">{subTitle}</SubTitle>
        </ProjectInfo>
      </Link>
    </Card>
  );
};

export default ProjectCard;
