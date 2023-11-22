import React from "react";
import { ListRow } from '@contentstack/venus-components'
import { NavLink } from "react-router-dom";

interface SideNavProps {
  toggleBrandVoiceClick?: () => void;
  isBrandVoiceOpen?: boolean;

}

const SideNav: React.FC<SideNavProps> = () => {
  return (
    <div className="side-nav">
      <div>
        <h2><b>Intelligence Hub</b></h2>
      </div>

      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <ListRow active={true} content="Brand Voice" />
      </NavLink>
      <NavLink to="/user" style={{ textDecoration: 'none' }}>
        <ListRow active={true} content="User" />
      </NavLink>

    </div>
  );
}

export default SideNav