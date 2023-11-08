import React from "react";
import SideNav from "../SideNav/SideNav";
import Header from "../Header/Header";

interface DashboardProps {
  toggleBrandVoiceClick: () => void;
  isBrandVoiceOpen: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ toggleBrandVoiceClick, isBrandVoiceOpen }) => {
  return (
    <div className="grid">
      <SideNav
        toggleBrandVoiceClick={toggleBrandVoiceClick}
        isBrandVoiceOpen={isBrandVoiceOpen}
      />
      <Header />
      <div className="dashboard py-3 px-4">
        <h3>Dashboard</h3>
      </div>
    </div>
  );
}

export default Dashboard;
