import React from 'react'

interface BrandToneProps {
  toggleBrandVoiceClick: () => void;
  isBrandVoiceOpen: boolean;
}

const BrandTone: React.FC<BrandToneProps> = ({ toggleBrandVoiceClick, isBrandVoiceOpen }) => {
  return (
    <div className='main-area'>
      <div className="voice-tone py-3 px-4">
        <h3>Voice & Tone</h3>
      </div>
    </div>
  );
}

export default BrandTone;