import React, {useState} from "react";
import Header from "./Header/Header";
import SideNav from "./SideNav/SideNav";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import BrandVoice from "./BrandVoice/BrandVoice";
import UserTone from "./UserTone/UserTone";
import AddEntry from "./BrandVoice/Forms/AddEntry";
import { Help } from "@contentstack/venus-components";
import AddKnowledge from "./BrandVoice/AddKnowledge";
import AddTone from "./UserTone/AddTone";
import AddUserToneForm from "./UserTone/Forms/AddUserToneForm";

interface MainProps { }

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
    const location = useLocation();
    console.log("params is ", location.pathname);

    return (
        <>
            <div className="grid">
                <SideNav />
                <Header
                    title={location.pathname === "/" ? (
                        <>
                            Brand Voice
                            <Help
                                text="Your Brand Voice enables Intelligence Hub to access information unique to what you are writing, as well as your specific tone(s) and style(s)"
                                type="primary"
                                alignment="right"
                            />
                        </>
                    ) : (
                        <>
                            User Tone
                            <Help
                                text="User Tone enables Intelligence Hub to align content with your brand's voice and personality."
                                type="primary"
                                alignment="right"
                            />
                        </>
                    )}
                    footerText={
                        location.pathname === "/" ? (
                            <>
                                All Knowledge Base
                                <Help
                                    text="Upload documents or information you want Intelligence Hub to be able to reference in your outputs."
                                    type="primary"
                                    alignment="right"
                                />
                            </>
                        ) : (
                            <>
                                All User Tones
                                <Help
                                    text="Upload documents or information you want Intelligence Hub to be able to reference in your outputs."
                                    type="primary"
                                    alignment="right"
                                />
                            </>
                        )
                    }
                    addButton={location.pathname === "/" ? (
                        <>
                            <AddKnowledge />
                        </>
                    ) : 
                        <>
                            <AddTone />
                        </>}
                />
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
            <Route path="add_new_user_tone" element={<AddUserToneForm />} />
        </Routes>
    );
};

export default Main;
