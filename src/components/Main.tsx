import React from "react";
import Header from "./Header/Header";
import SideNav from "./SideNav/SideNav";
import { Route, Routes } from "react-router-dom";
import BrandVoice from "./BrandVoice/BrandVoice";
import BrandTone from "./BrandTone/BrandTone";

interface MainProps { }

const Main: React.FC<MainProps> = () => {
    return (
        <div className="grid">
            <SideNav />
            <Header />
            <Routes>
                <Route path="/" element={<BrandVoice />} />
                <Route path="/user" element={<BrandTone />} />
            </Routes>
        </div>
    )
}

export default Main