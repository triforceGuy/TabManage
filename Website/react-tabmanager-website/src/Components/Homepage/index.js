import React from 'react'
import Navbar from '../Navbar'
import { HomepageBtn, HomepageContainer, HomepageContent, HomepageH1, HomepageItems, HomepageP } from './HomepageElements'

function Homepage() {
  return (
      <HomepageContainer>
        <Navbar />
          <HomepageContent>
              <HomepageItems>
                <HomepageH1>Tab Manager</HomepageH1>
                <HomepageP>For all of your tab management needs</HomepageP>
                <HomepageBtn>Download</HomepageBtn>
              </HomepageItems>
          </HomepageContent>
      </HomepageContainer>
    )
}

export default Homepage