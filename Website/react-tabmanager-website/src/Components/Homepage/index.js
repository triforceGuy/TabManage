import React from 'react'
import Navbar from '../Navbar'
import { BottomBanner, HomepageContainer, HomepageContent } from './HomepageElements'

function Homepage() {
  return (
      <HomepageContainer>
          <Navbar />
          <BottomBanner />
            <HomepageContent>
            </HomepageContent>
      </HomepageContainer>
    )
}

export default Homepage