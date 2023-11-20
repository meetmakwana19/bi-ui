import React from "react";
import TableEntries from "./TableEntries";

interface BrandVoiceProps {
}

const BrandVoice: React.FC<BrandVoiceProps> = () => {
  return (
    <div className="main-area">
      <TableEntries />
    </div>
  );
}

export default BrandVoice;
