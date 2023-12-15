import React from "react";
import { Icon, LeftNavigation } from '@contentstack/venus-components'
import { useLocation, useNavigate } from "react-router-dom";
import { IMicroAppsObj } from "../../app/common/models";

interface SideNavProps {
  microAppsObj: IMicroAppsObj
}

const SideNav: React.FC<SideNavProps> = (props) => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const navigationData: any = [
    {
      title: "Brand Voice",
      onclick: () => navigate("brand-voice"),
      id: "Brand-Voice",
      icon: <Icon icon="WhatsNew" version="v2" size="medium" />,
      default: location.pathname === `/projects/${props.microAppsObj.token}/brand-voice` ? true : false,
    },
    {
      title: "User Tone",
      onclick: () => navigate("user-tone"),
      id: "User",
      icon: <Icon icon="UsersRoles" version="v2" size="medium" />,
      default: location.pathname === `/projects/${props.microAppsObj.token}/user-tone` ? true : false,
    },
    {
      title: "Knowledge Base",
      onclick: () => navigate("knowledge-base"),
      id: "knowledge_base",
      icon: <Icon icon="PublishRule" version="v2" size="medium" />,
      default: location.pathname === `/projects/${props.microAppsObj.token}/knowledge-base` ? true : false,
    },
  ]
  const navigationProps = {
    navigationTitle: "Intelligence Hub",
    navigationData: navigationData,
  }

  return (
    <LeftNavigation navigationProps={navigationProps} headerContent={false} />
  );
}

export default SideNav