import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Router } from 'react-router-dom';
import { IMicroAppsObj } from './app/common/models/microAppObj.ts'
import { createBrowserHistory } from 'history';
import { ErrorBoundary } from './app/common/components/ErrorBoundary/index.tsx'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// )

declare global {
  interface Window {
    renderIntelligenceHub: (
      containerId?: string,
      // histroy?: History,
      histroy?: any, // typing it as `any` makes the history prop work on the Router component.  
      microAppsObj?: IMicroAppsObj,
    ) => void;
    DD_RUM?: any;
  }
}

window.renderIntelligenceHub = (
  containerId = "root",
  history = createBrowserHistory(),
  microAppsObj = {
    relativeUrl: "/intelligencehub",
    leftsidebarContainerDom: "backdrop",
    org_uid: null,
    token: null,
    currentUser: {},
    currentOrganization: {},
    project_id: "12345678",
  }
) => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <ErrorBoundary>
      <Router history={history}>
        <App microAppsObj={microAppsObj} />
      </Router>
    </ErrorBoundary>,
  );
};
