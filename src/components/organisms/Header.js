import React from "react"
import styled from "styled-components"
import { useIntl, changeLocale } from "gatsby-plugin-intl"

import { ThemeToggle, Pill, Title, Link, Text, Span } from "atoms"
import { LanguageSwitch } from "molecules"

import { getColor, spacing } from "theme"

export default ({ navlinks }) => {
  const { locale, formatMessage } = useIntl()
  const languages = ["Deutsch", "English"]

  return (
    <Nav>
      <Left>
        <Link nav to="/">
          <DesktopLogo>
            <Title color="primary">max</Title>
            <Title color="bodyContrast">werpers</Title>
          </DesktopLogo>
          <MobileLogo>
            <Text color="primary">
              M<Span color="bodyContrast">W</Span>
            </Text>
          </MobileLogo>
        </Link>
        <InfoPill>{formatMessage({ id: "infoPill" })}</InfoPill>
      </Left>
      <NavItems>
        <NavLinks>
          {navlinks.map(link => (
            <StyledLink
              nav
              color="bodyContrast"
              activecolor="primary"
              key={link.name}
              {...link}
            >
              <Text color="bodyContrast">{link.name}</Text>
            </StyledLink>
          ))}
        </NavLinks>
        <NavTools>
          <LanguageSwitch
            changeLanguage={changeLocale}
            currentLanguage={locale}
            languages={languages}
          />
          <ThemeToggle style={{ marginLeft: "0.5em", marginRight: "0.5em" }} />
        </NavTools>
      </NavItems>
    </Nav>
  )
}

const Nav = styled.nav`
  font-family: "Archivo";
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  height: 3em;
  background-color: ${getColor("body")};
  border-bottom: 1px solid ${getColor("bodyTint")};
  padding: 0 ${spacing.mobile.sides};

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: 1.5em ${spacing.lg.sides};
  }
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 1.5em ${spacing.xl.sides};
  }
`

const Left = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
`

const InfoPill = styled(Pill)`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: inline;
    margin-left: 1em;
  }
`

const DesktopLogo = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
  }
`

const MobileLogo = styled.div`
  height: 3em;
  display: flex;
  align-items: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`

const NavItems = styled.ul`
  display: flex;
`

const NavLinks = styled.li`
  display: flex;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
  & > * {
    margin-right: 0.5em;
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      margin-right: 0.5em;
    }
  }
`

const StyledLink = styled(Link)`
  padding: 0.5em 0.25em;
  border-radius: 0.25em;
  :hover {
    background-color: ${getColor("bodyGlow")};
  }
`

const NavTools = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
  height: 100%;
  font-weight: 400;
`