import "@contentstack/venus-components/build/main.css"
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from "./components/Dashboard";
import BrandVoice from "./components/BrandVoice/BrandVoice";
import BrandTone from "./components/BrandTone/BrandTone";
import Chat from "./components/Chat";
import { useState } from "react";
import Main from "./components/Main";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import { Button } from "@contentstack/venus-components";

function App() {
  const [isBrandVoiceOpen, setIsBrandVoiceOpen] = useState(false);

  const toggleBrandVoiceClick = () => {
    setIsBrandVoiceOpen(!isBrandVoiceOpen);
  };

  return (
    <div className="app">
      {/* ḍefining routes */}
      {/* <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              toggleBrandVoiceClick={toggleBrandVoiceClick}
              isBrandVoiceOpen={isBrandVoiceOpen}
            />
          }
        />
        <Route path="/knowledge_base" element={<BrandVoice toggleBrandVoiceClick={toggleBrandVoiceClick}
          isBrandVoiceOpen={isBrandVoiceOpen} />} />
        <Route path="/voice_n_tone" element={<BrandTone toggleBrandVoiceClick={toggleBrandVoiceClick}
          isBrandVoiceOpen={isBrandVoiceOpen} />} />
        <Route path="/chat" element={<Chat />} />
      </Routes> */}
      <SideNav/>
      <Button>Hello</Button>
      {/* <Main/> */}
    </div>
  );
}

export default App;
