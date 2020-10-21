import React from 'react'
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggleOpen }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggleOpen}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='discover' onClick={toggleOpen}>
              Discover
            </SidebarLink>
            <SidebarLink to='courses' onClick={toggleOpen}>
              Courses
            </SidebarLink>
            <SidebarLink to='services' onClick={toggleOpen}>
              Languages
            </SidebarLink>
            <SidebarLink to='about' onClick={toggleOpen}>
              About
            </SidebarLink>
            <SidebarLink to='signup' onClick={toggleOpen}>
              Sign up
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to='/'>Sign in</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
