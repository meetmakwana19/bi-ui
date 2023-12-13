import React from 'react'
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import { useLocation } from "react-router-dom";
import { Help } from "@contentstack/venus-components";
import AddKnowledge from "../BrandVoice/AddKnowledge";
import AddTone from "../UserTone/AddTone";


type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
            </div>
        </>
    );
};

export default Layout