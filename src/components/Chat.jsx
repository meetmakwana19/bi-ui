import React from "react";
import SideNav from "./SideNav";
import Header from "./Header";

function Chat() {
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
