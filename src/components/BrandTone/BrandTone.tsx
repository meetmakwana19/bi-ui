import React from 'react'
import './BrandTone.css'
import { Button, Help } from '@contentstack/venus-components'

interface BrandToneProps {}

const BrandTone: React.FC<BrandToneProps> = () => {
  return (
    <div className="brand-tone-style">
      <div className='heading-button'>

        <section className='heading'>
          <h2>User Tone <Help text="User Tone empowers Contentstack to align content with your brand's voice and personality." type="primary" alignment="right" />
          </h2>
        </section>

          <Button icon="AddPlus" buttonType="primary" size='regular' >Add Tone</Button>

      </div>
    </div>
  );
}

export default BrandTone;