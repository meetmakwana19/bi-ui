import "@contentstack/venus-components/build/main.css"
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="app">
      {/* <Main /> */}
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
