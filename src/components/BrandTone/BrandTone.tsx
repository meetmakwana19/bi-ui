import React from 'react'
// import SideNav from "../SideNav/SideNav";
// import Header from "../Header/Header";
import {Help} from '@contentstack/venus-components'

interface BrandToneProps {}

const BrandTone: React.FC<BrandToneProps> = () => {
  return (
    <div className="brand-tone-style">
      {/* <SideNav /> */}
      {/* <Header /> */}
      <div className='tone-header'>
        <h1>Brand Tone</h1>
        <Help 
          text="Your tone enables Contentstack to align content with your brand's voice and personality."
        />
      </div>
      <div className="voice-tone">
        <h3>Voice & Tone</h3>
      </div>
    </div>
  );
}

export default BrandTone;