import React from "react";
import { Icon } from "@contentstack/venus-components";

interface HeaderProps {
  title: string | React.ReactNode; 
  footerText: string | React.ReactNode;
  addButton: React.ReactNode;
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
