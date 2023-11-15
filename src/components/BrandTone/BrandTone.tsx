import React from 'react'
import './BrandTone.css'
import { Button, Help, Table } from '@contentstack/venus-components'

interface BrandToneProps {}

const BrandTone: React.FC<BrandToneProps> = () => {

  const tableProps = {
    columns: [
      {Header: 'Name'},
      {Header: 'Created By'},
      {Header: 'Modified at'},
      {Header: 'Tags'},
    ] ,
    data: [] ,
    uniqueKey: 'id' ,
    totalCounts: 3,
  }
  return (
    <div className="brand-tone-style">
      <div className='heading-button'>

        <h2>User Tone <Help text="User Tone empowers Contentstack to align content with your brand's voice and personality." type="primary" alignment="right" />
        </h2>

        <Button icon="AddPlus" buttonType="primary" size='regular' >Add Tone</Button>

      </div>

      <Table {...tableProps}/>
    </div>
  );
}

export default BrandTone;