import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtn, SideBtnWrap } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarMenu>
            <SidebarLink to='/'>How To Set Up</SidebarLink>
            <SidebarLink to='/'>Log In</SidebarLink>
            <SidebarLink to='/'>Updates (For Future)</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <a href="https://mega.nz/folder/FP9GHCaB#VKAeIFjGuQTpnI9XTIc3eQ">
            <SidebarBtn to='/'>Download</SidebarBtn>
            </a>
        </SideBtnWrap>
      </SidebarContainer>
  )
}

export default Sidebar
