import React from "react";
// import Header from "./Header/Header";
import SideNav from "./SideNav/SideNav";
import BrandTone from "./BrandTone/BrandTone";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
    return(
        <div className="main-style">
            <SideNav />
            {/* <Header/> */}
            <BrandTone/>
        </div>
    )
}

export default Main