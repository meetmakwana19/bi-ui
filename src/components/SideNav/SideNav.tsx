import React from "react";
import { Icon, LeftNavigation } from '@contentstack/venus-components'
import { useLocation, useHistory } from "react-router-dom";

interface SideNavProps {
}

const SideNav: React.FC<SideNavProps> = () => {

  const histroy = useHistory();
  const navigate = (path: any) => {
    // react-router-dom v6 syntax :
    histroy.push(path);
  }
  const location = useLocation();

  const navigationData: any = [
    {
      title: "Brand Voice",
      onclick: () => navigate("/"),
      id: "Brand-Voice",
      icon: <Icon icon="WhatsNew" version="v2" size="medium" />,
      default: location.pathname === "/" ? true : false,
    },
    {
      title: "User",
      onclick: () => navigate("/user"),
      id: "User",
      icon: <Icon icon="UsersRoles" version="v2" size="medium" />,
      default: location.pathname === "/user" ? true : false,
    },
    {
      title: "Knowledge Base",
      onclick: () => navigate("/knowledge_base"),
      id: "knowledge_base",
      icon: <Icon icon="PublishRule" version="v2" size="medium" />,
      default: location.pathname === "/knowledge_base" ? true : false,
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