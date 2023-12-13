import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from './app/common/components/ErrorBoundary/index.tsx';
import { IMicroAppsObj } from './app/common/models/microAppObj.ts';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

declare global {
  interface Window {
    renderIntelligenceHub: (
      containerId?: string,
      // check this
      microAppsObj?: IMicroAppsObj,
    ) => void;
    DD_RUM?: any;
  }
}

window.renderIntelligenceHub = (
  containerId = "root",
  microAppsObj = {
    relativeUrl: "/intelligencehub",
    leftsidebarContainerDom: "backdrop",
    org_uid: null,
    token: null,
    currentUser: {},
    currentOrganization: {},
    // check this
  }
) => {


  ReactDOM.render(
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>,
    document.getElementById(containerId),
  );
};
