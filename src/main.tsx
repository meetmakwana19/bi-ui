import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { IMicroAppsObj } from './app/common/models/microAppObj.ts'
import { createBrowserHistory, History } from 'history';
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
      histroy?: History,
      // check this
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
    token: "12345678",
    currentUser: {},
    currentOrganization: {},
    // check this
  }
) => {
  ReactDOM.render(
    <ErrorBoundary>
      <Router history={history}>
        <App microAppsObj={microAppsObj} />
      </Router>
    </ErrorBoundary>,
    document.getElementById(containerId),
  );
};
