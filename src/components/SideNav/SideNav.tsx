import React from "react";
import { NavLink } from "react-router-dom";
import { ListRow } from '@contentstack/venus-components'

interface SideNavProps {
  toggleBrandVoiceClick?: () => void;
  isBrandVoiceOpen?: boolean;

}

const SideNav: React.FC<SideNavProps> = ({ toggleBrandVoiceClick, isBrandVoiceOpen }) => {
  return (
    <div className="side-nav">
      <div>
        <h2><b>Intelligence Hub</b></h2>
      </div>

      <ListRow rightArrow={true} active={true} content="Brand Voice"/>
      <ListRow rightArrow={true} active={true} content="User"/>

    </div>
  );
}

export default SideNav