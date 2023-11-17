import React from 'react'
import './UserTone.css'
import UserToneTable from './UserToneTable'
import AddTone from './AddTone';

interface BrandToneProps { }

const BrandTone: React.FC<BrandToneProps> = () => {

return (
  <div className="brand-tone-style">
    <AddTone/>
    <UserToneTable />
  </div>
);
}

export default BrandTone;