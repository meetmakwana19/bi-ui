import React from 'react'
import './UserTone.css'
import UserToneTable from './UserToneTable'

interface BrandToneProps { }

const BrandTone: React.FC<BrandToneProps> = () => {

return (
  <div className="brand-tone-style">
    <UserToneTable />
  </div>
);
}

export default BrandTone;