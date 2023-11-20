import React, {useState} from "react";
import Header from "./Header/Header";
import SideNav from "./SideNav/SideNav";
import { Outlet, Route, Routes } from "react-router-dom";
import BrandVoice from "./BrandVoice/BrandVoice";
import UserTone from "./UserTone/UserTone";

interface MainProps { }

const Layout = () => {
    console.log("yooooooo");

    return (
        <>
            <Header title="User Tone"/>
            <Outlet />
        </>
    )
}
const Main: React.FC<MainProps> = () => {
    return (
        <div className="grid">
            <SideNav />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<BrandVoice />} />
                    <Route path="/user" element={<UserTone />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Main