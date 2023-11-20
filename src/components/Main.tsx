import React from "react";
// import Header from "./Header/Header";
import SideNav from "./SideNav/SideNav";
import { Outlet, Route, Routes } from "react-router-dom";
import BrandVoice from "./BrandVoice/BrandVoice";
import UserTone from "./UserTone/UserTone";
import AddEntry from "./BrandVoice/Forms/AddEntry";

interface MainProps { }

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <>
            <div className="grid">
                <SideNav />
                <Header />
                {children}
                <Outlet />
            </div>
        </>
    );
};

const Main: React.FC<MainProps> = () => {
    return (
        <Routes>
            {/* ROUTE PART-1 main page */}
            <Route path="/" element={<Layout />}>
                <Route index element={<BrandVoice />} />
                <Route path="/user" element={<UserTone />} />
            </Route>

            {/* ROUTE PART-2 forms */}
            <Route path="new_entry" element={<AddEntry />} />
        </Routes>
    );
};

export default Main;
