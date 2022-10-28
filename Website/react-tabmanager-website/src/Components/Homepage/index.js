import React, {useState} from 'react'
import BottomBanner from '../BottomBanner'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { HomepageBtn, HomepageContainer, HomepageContent, HomepageH1, HomepageItems, HomepageP } from './HomepageElements'

function Homepage() {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
  setIsOpen(!isOpen)
}

  return (
      <HomepageContainer>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <BottomBanner />
        <decoration />  
          <HomepageContent>
              <HomepageItems>
                <HomepageH1>Tab Manager</HomepageH1>
                <HomepageP>For all of your tab management needs!</HomepageP>
                <a href="https://mega.nz/folder/FP9GHCaB#VKAeIFjGuQTpnI9XTIc3eQ">
                <HomepageBtn>Download</HomepageBtn>
                </a>
              </HomepageItems>
          </HomepageContent>
      </HomepageContainer>
    )
}

export default Homepage