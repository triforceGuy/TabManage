import React, {useState} from 'react';
import BottomBanner from '../BottomBanner';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { SetUpContainer, SetUpContent, SetUpHeading, SetUpItems, SetUpimg, SetUpDesc, SetUpStepName } from './SetUpElements';
import Img1 from '../../images/TMWStep1.gif';
import Img2 from '../../images/TMWStep2.gif';
import Img3 from '../../images/TMWStep3.gif';
import Img4 from '../../images/TMWStep4.gif';

function SetUp() {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
  setIsOpen(!isOpen)

  }
    return (
      <SetUpContainer>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <BottomBanner />
        <SetUpContent>
          <SetUpItems>
            <SetUpHeading>How To Set Up (Google Chrome)</SetUpHeading>
            <SetUpimg src={Img1} alt='/' />
            <SetUpStepName>Step 1: Download</SetUpStepName>
            <SetUpDesc>First navigate to our download link on this website. After being redirected to our mega.nz please click "Download all as ZIP." Be sure to extract these files from the ZIP.</SetUpDesc>
            <SetUpimg src={Img2} alt='/' />
            <SetUpStepName>Step 2: Set up the extension inside your google chrome browser</SetUpStepName>
            <SetUpDesc>Click on the settings in the top right. Hover above the "more tools" option and select "extensions."</SetUpDesc>
            <SetUpimg src={Img3} alt='/' />
            <SetUpStepName>Step 3: Load unpacked folder</SetUpStepName>
            <SetUpDesc>Select load unpacked in the top left corner and the select the extracted file you downloaded earlier. </SetUpDesc>
            <SetUpimg src={Img4} alt='/' />
            <SetUpStepName>Step 4: Open the extension</SetUpStepName>
            <SetUpDesc>Now click on the puzzle piece looking button in the top right corner. From the drop down menu click on Tab Manager and you are good to go.</SetUpDesc>
          </SetUpItems>
        </SetUpContent>
      </SetUpContainer>
    )
}

export default SetUp