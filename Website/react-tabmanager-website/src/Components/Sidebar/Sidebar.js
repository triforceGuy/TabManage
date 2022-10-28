import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SideBtn, SidebarBtn, SideBtnWrap } from './SidebarElements';
import { Navigate } from 'react-router-dom';

const Sidebar = ({isOpen, toggle}) => {
  const [goToSetUp, setGoToSetUp] = React.useState(false);

  if(goToSetUp){
    return <Navigate to="/SetUp" />
  }

  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarMenu>
            <SideBtn onClick={() => {
              setGoToSetUp(true);
            }}>How To Set Up</SideBtn>
            <SideBtn to='/'>Log In</SideBtn>
            <SideBtn to='/'>Updates (For Future)</SideBtn>
        </SidebarMenu>
        <SideBtnWrap>
            <a href="https://mega.nz/folder/wXsRXKqa#xj42Whl0p_rsXlXMHkEg8Q">
            <SidebarBtn to='/'>Download</SidebarBtn>
            </a>
        </SideBtnWrap>
      </SidebarContainer>
  )
}

export default Sidebar
