import React from "react";
import Header from "./Header/Header";
import SideNav from "./SideNav/SideNav";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
    return(
        <div className="grid">
            <SideNav />
            <Header/>
        </div>
    )
}

export default Main