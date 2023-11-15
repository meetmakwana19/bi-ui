import { Help, Icon } from "@contentstack/venus-components";
import React from "react";
import AddKnowledge from "../BrandVoice/AddKnowledge";

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <section className="header-left">
        <main>
          <Icon icon="Hamburger" size="small" hover={true} hoverType="secondary" shadow="medium" />
          <h2>Brand Voice <Help text="Your Brand Voice enables Intelligence Hub to access information unique to what you are writing, as well as your specific tone(s) and style(s)" type="primary" alignment="right" />
          </h2>
        </main>
        <footer>
          <div>All Knowledge Base <Help text="Upload documentsor information you want Intelligence Hub to be able to reference in your outputs." type="primary" alignment="right" /></div>
        </footer>
      </section>
      <AddKnowledge />
    </div>
  );
}

export default Header
