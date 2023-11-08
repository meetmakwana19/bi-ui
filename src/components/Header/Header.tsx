import { Help, Icon } from "@contentstack/venus-components";
import React from "react";

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <Icon icon="Hamburger" size="small" hover={true} hoverType="secondary" shadow="medium" />
      <h2>Brand Voice <Help text="Your Brand Voice enables Intelligence Hub to access information unique to what you are writing, as well as your specific tone(s) and style(s)" type="primary" alignment="right" > Help Text here</Help>
      </h2>
    </div>
  );
}

export default Header
