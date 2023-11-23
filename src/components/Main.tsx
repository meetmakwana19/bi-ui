import React from "react";
import { Route, Routes} from "react-router-dom";
import BrandVoice from "./BrandVoice/BrandVoice";
import UserTone from "./UserTone/UserTone";
import AddEntry from "./BrandVoice/Forms/AddEntry";
import AddUserToneForm from "./UserTone/Forms/AddUserToneForm";
import Layout from "./Layout/Layout";

interface MainProps { }


const Main: React.FC<MainProps> = () => {
    return (
        <Routes>
            {/* ROUTE PART-1 main page */}
            <Route path="/" element={<Layout children={undefined} />}>
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
