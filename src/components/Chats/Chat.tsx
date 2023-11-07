import React from "react";
import SideNav from "../SideNav/SideNav";
import Header from "../Header/Header";

interface ChatProps {
  toggleBrandVoiceClick?: () => void;
  isBrandVoiceOpen?: boolean;
}

const Chat: React.FC<ChatProps> = () => {
  return (
    <div className="grid">
      <SideNav />
      <Header />
      <div className="chat py-3 px-4">
        <h3>Chat</h3>
      </div>
    </div>
  );
}

export default Chat;
