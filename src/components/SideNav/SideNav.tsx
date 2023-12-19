import React from "react";
import { Icon, LeftNavigation } from '@contentstack/venus-components'
import { useHistory, useLocation } from "react-router-dom";
import { IMicroAppsObj } from "../../app/common/models";

interface SideNavProps {
  microAppsObj: IMicroAppsObj
}

const SideNav: React.FC<SideNavProps> = (props) => {
  
  const history = useHistory();
  const location = useLocation();

  const navigationData: any = [
    {
      title: "Brand Voice",
      onclick: () => history.push(`/projects/${props.microAppsObj.project_id}/brand-voice`),
      id: "Brand-Voice",
      icon: <Icon icon="WhatsNew" version="v2" size="medium" />,
      default: location.pathname === `/projects/${props.microAppsObj.project_id}/brand-voice` ? true : false,
    },
    {
      title: "User Tone",
      onclick: () => history.push(`/projects/${props.microAppsObj.project_id}/user-tone`),
      id: "User",
      icon: <Icon icon="UsersRoles" version="v2" size="medium" />,
      default: location.pathname === `/projects/${props.microAppsObj.project_id}/user-tone` ? true : false,
    },
    {
      title: "Knowledge Base",
      onclick: () => history.push(`/projects/${props.microAppsObj.project_id}/knowledge-base`),
      id: "knowledge_base",
      icon: <Icon icon="PublishRule" version="v2" size="medium" />,
      default: location.pathname === `/projects/${props.microAppsObj.project_id}/knowledge-base` ? true : false,
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