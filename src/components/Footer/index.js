import React from 'react'
import { IconContext } from 'react-icons/lib'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements'
import { theme } from '../../theme'

const Footer = () => {
  return (
    <>
      <IconContext.Provider value={{ color: theme.primaryBackground }}>
        <FooterContainer>
          <FooterWrap>
            <FooterLinksContainer>
              {/* First footer column */}
              <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to='/'>How it works</FooterLink>
                  <FooterLink to='/'>Testimonials</FooterLink>
                  <FooterLink to='/'>Privacy</FooterLink>
                  <FooterLink to='/'>Terms of Service</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle>Contact Us</FooterLinkTitle>
                  <FooterLink to='/'>Contact</FooterLink>
                  <FooterLink to='/'>Support</FooterLink>
                  <FooterLink to='/'>Careers</FooterLink>
                  <FooterLink to='/'>Advertising</FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
              {/* Second footer column */}
              <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle>Instructors</FooterLinkTitle>
                  <FooterLink to='/'>Our Model</FooterLink>
                  <FooterLink to='/'>Ambassadors</FooterLink>
                  <FooterLink to='/'>Create an Account</FooterLink>
                  <FooterLink to='/'>Portal</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle>Social</FooterLinkTitle>
                  <FooterLink to='/'>Intsagram</FooterLink>
                  <FooterLink to='/'>Facebook</FooterLink>
                  <FooterLink to='/'>Youtube</FooterLink>
                  <FooterLink to='/'>Twitter</FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
              <SocialMediaWrap>
                <SocialLogo to='/'>smooth</SocialLogo>
                <SocialIcons>
                  <SocialIconLink href='#' aria-label='Facebook'>
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink href='#' aria-label='Instagram'>
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink href='#' aria-label='Youtube'>
                    <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink href='#' aria-label='Twitter'>
                    <FaTwitter />
                  </SocialIconLink>
                  <SocialIconLink href='#' aria-label='Github'>
                    <FaGithub />
                  </SocialIconLink>
                </SocialIcons>
                <WebsiteRights>
                  smooth © {new Date().getFullYear()} All rights reserved.
                </WebsiteRights>
              </SocialMediaWrap>
            </SocialMedia>
          </FooterWrap>
        </FooterContainer>
      </IconContext.Provider>
    </>
  )
}

export default Footer
