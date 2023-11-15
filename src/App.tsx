import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// @ts-ignore
import Dashboard from "./components/Dashboard";
// @ts-ignore
import KnowledgeBase from "./components/KnowledgeBase/KnowledgeBase";
// @ts-ignore
import VoiceTone from "./components/UserVoice/VoiceTone";
// @ts-ignore
import Chat from "./components/Chat";
import { useState } from "react";

function App() {
  const [isBrandVoiceOpen, setIsBrandVoiceOpen] = useState(false);

  const toggleBrandVoiceClick = () => {
    setIsBrandVoiceOpen(!isBrandVoiceOpen);
  };

  return (
    <div className="app">
      {/* ḍefining routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              toggleBrandVoiceClick={toggleBrandVoiceClick}
              isBrandVoiceOpen={isBrandVoiceOpen}
            />
          }
        />
        <Route path="/knowledge_base" element={<KnowledgeBase toggleBrandVoiceClick={toggleBrandVoiceClick}
          isBrandVoiceOpen={isBrandVoiceOpen} />} />
        <Route path="/voice_n_tone" element={<VoiceTone toggleBrandVoiceClick={toggleBrandVoiceClick}
          isBrandVoiceOpen={isBrandVoiceOpen} />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
