import { Help, Icon } from "@contentstack/venus-components";
import React from "react";
import AddKnowledge from "../BrandVoice/AddKnowledge";

interface HeaderProps { 
  title: any,
  footerText: any,
  addButton: any,
}

const Header: React.FC<HeaderProps> = (props) => {

  
  return (
    <div className="header">
      <section className="header-left">
        <main>
          <Icon icon="Hamburger" size="small" hover={true} hoverType="secondary" shadow="medium" />
          <h2>{props.title}
          </h2>
        </main>
        <footer>
          <div>{props.footerText}</div>
        </footer>
      </section>
      {props.addButton}
    </div>
  );
}

export default Header
