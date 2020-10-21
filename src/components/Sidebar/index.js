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
  const navLinkProps = {
    smooth: 'true',
    duration: 500,
    spy: true,
    exact: 'true',
    offset: -80,
  }
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggleOpen}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='discover' onClick={toggleOpen} {...navLinkProps}>
              Discover
            </SidebarLink>
            <SidebarLink to='courses' onClick={toggleOpen} {...navLinkProps}>
              Courses
            </SidebarLink>
            <SidebarLink to='services' onClick={toggleOpen} {...navLinkProps}>
              Languages
            </SidebarLink>
            <SidebarLink to='about' onClick={toggleOpen} {...navLinkProps}>
              About
            </SidebarLink>
            {/* <SidebarLink to='signup' onClick={toggleOpen}>
              Sign up
            </SidebarLink> */}
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign in</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
