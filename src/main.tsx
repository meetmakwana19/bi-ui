import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Use BrowserRouter
import App from './App.tsx';
import './index.css';
import { IMicroAppsObj } from './app/common/models/microAppObj.ts';
import { ErrorBoundary } from './app/common/components/ErrorBoundary/index.tsx';

declare global {
  interface Window {
    renderIntelligenceHub: (
      containerId?: string,
      microAppsObj?: IMicroAppsObj,
    ) => void;
    DD_RUM?: any;
  }
}

window.renderIntelligenceHub = (
  containerId = 'root',
  microAppsObj = {
    relativeUrl: '/intelligencehub',
    leftsidebarContainerDom: 'backdrop',
    org_uid: null,
    token: '12345678',
    currentUser: {},
    currentOrganization: {},
  }
) => {
  const containerElement = document.getElementById(containerId);
  if (!containerElement) {
    console.error(`Container element with id '${containerId}' not found.`);
    return;
  }

  ReactDOM.render(
    <ErrorBoundary>
      <Router>
        <App microAppsObj={microAppsObj} />
      </Router>
    </ErrorBoundary>,
    containerElement
  );
};
