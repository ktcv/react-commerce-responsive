import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { theme } from '../../theme'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

import { animateScroll } from 'react-scroll'

const Navbar = ({ toggleOpen }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 920) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const scrollToTop = () => animateScroll.scrollToTop()

  const navLinkProps = {
    smooth: 'true',
    duration: 500,
    spy: true,
    exact: 'true',
    offset: -80,
  }

  return (
    <>
      <IconContext.Provider value={{ color: theme.primaryBackground }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={scrollToTop}>
              smooth
            </NavLogo>
            <MobileIcon onClick={toggleOpen}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='discover' {...navLinkProps}>
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='courses' {...navLinkProps}>
                  Courses
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='services' {...navLinkProps}>
                  Languages
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='about' {...navLinkProps}>
                  About
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks  to='signup' {...navLinkProps}>
                  Sign up
                </NavLinks>
              </NavItem> */}
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign in</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
