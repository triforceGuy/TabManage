import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SideBtn, SidebarBtn, SideBtnWrap } from './SidebarElements';
import { Navigate } from 'react-router-dom';

const Sidebar = ({isOpen, toggle}) => {
  const [goToContact, setGoToContact] = React.useState(false);

  if(goToContact){
    return <Navigate to="/SetUp" />
  }

  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarMenu>
            <SideBtn onClick={() => {
              setGoToContact(true);
            }}>How To Set Up</SideBtn>
            <SideBtn to='/'>Log In</SideBtn>
            <SideBtn to='/'>Updates (For Future)</SideBtn>
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
