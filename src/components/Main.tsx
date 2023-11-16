import React from "react";
import Header from "./Header/Header";
import SideNav from "./SideNav/SideNav";
import { Route, Routes } from "react-router-dom";
import BrandVoice from "./BrandVoice/BrandVoice";
import UserTone from "./UserTone/UserTone";

interface MainProps { }

const Main: React.FC<MainProps> = () => {
    return (
        <div className="grid">
            <SideNav />
            {/* <div className="content">
            </div> */}
                <Header />
                <Routes>
                    <Route path="/" element={<BrandVoice />} />
                    <Route path="/user" element={<UserTone />} />
                </Routes>
        </div>
    )
}

export default Main