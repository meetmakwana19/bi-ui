import React from 'react'
import { Button, Help } from '@contentstack/venus-components'
import './UserTone.css'


const AddTone: React.FC = () => {
  return (
    <div className='heading-button'>
      <h2>User Tone <Help text="User Tone enables Contentstack to align content with your brand's voice and personality." type="primary" alignment="right" />
      </h2>
      <Button icon="AddPlus" buttonType="primary" size='regular' >Add Tone</Button>
    </div>
  )
}

export default AddTone