import "@contentstack/venus-components/build/main.css"
import "./App.css";
import Layout from "./components/Layout";
import { IMicroAppsObj } from "./app/common/models";

const App = ({ microAppsObj }: { microAppsObj: IMicroAppsObj }) => {  
  return (
    <div className="app">
      <Layout microAppsObj={microAppsObj}/>
    </div>
  );
}

export default App;
