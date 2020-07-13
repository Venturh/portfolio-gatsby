import React from "react"
import styled from "styled-components"
import { Star } from "@styled-icons/remix-line/Star"

import Typography, { SubText, Text } from "./Typography"
import { PrimaryButton, SecondaryButton } from "./Button"
import Shape from "./Shape"

const Card = styled.div`
  background-color: ${props => props.theme.colors.toolbar};
  border-radius: 0.5em;
  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.25);
  padding: 0.75em;
  transition: all 0.2s ease-in-out;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    :hover {
      transform: scale(1.05) translateY(-10px);
      cursor: default;
    }
  }
`

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LanguageIndicator = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 0.25rem;
  }
`

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
`

const StyledStar = styled(Star)`
  width: 1em;
  margin-right: 0.1em;
`

const StyledDescription = styled(SubText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5em;
  Button {
    min-width: 5em;
    margin-right: 0.5em;
    padding: 0.25em 0.5em;
  }
`

const ProjectCard = ({
  url,
  nameWithOwner,
  description,
  homepageUrl,
  primaryLanguage,
  stargazers,
}) => {
  return (
    <Card>
      <Tag>
        <LanguageIndicator>
          <Shape
            bg={primaryLanguage.color}
            width={7.5}
            height={7.5}
            borderRadius="100%"
          />
          <Typography fontSize="button">{primaryLanguage.name}</Typography>
        </LanguageIndicator>
        <StarWrapper>
          <StyledStar />
          <Typography fontSize="button">{stargazers.totalCount}</Typography>
        </StarWrapper>
      </Tag>

      <Text fontWeight="bold">{nameWithOwner}</Text>
      <StyledDescription text={description} />
      <ButtonWrapper>
        <PrimaryButton link={url}>Link</PrimaryButton>
        {homepageUrl ? (
          <SecondaryButton bg="toolbar" link={homepageUrl}>
            Live-Demo
          </SecondaryButton>
        ) : null}
      </ButtonWrapper>
    </Card>
  )
}

export default ProjectCard
