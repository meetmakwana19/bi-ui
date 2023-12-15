import React from 'react'
import './UserTone.css'
import KnowledgeBaseTable from './Table/KnowledgeBaseTable'

interface BrandToneProps { }

const BrandTone: React.FC<BrandToneProps> = () => {

return (
  <div className="brand-tone-style">
    <KnowledgeBaseTable />
  </div>
);
}

export default BrandTone;