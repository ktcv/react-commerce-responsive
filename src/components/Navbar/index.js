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

const Navbar = ({ toggleOpen }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 960) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: theme.primaryBackground }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/'>smooth</NavLogo>
            <MobileIcon onClick={toggleOpen}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='discover'>Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='courses'>Courses</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='services'>Languages</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='about'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='signup'>Sign up</NavLinks>
              </NavItem>
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
