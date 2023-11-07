import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header py-3 px-4">
      <h2 className="fw-bolder">Brand Voice</h2>
      <p className="bold-gray">
        Your Brand Voice enables Jasper to access information unique to what you
        are writing, as well as your specific tone(s) and style(s).
      </p>
    </div>
  );
}

export default Header
