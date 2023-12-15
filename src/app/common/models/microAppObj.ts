import { ContainerLayout } from './containerLayout';

export interface IMicroAppsObj {
  relativeUrl: string;
  leftsidebarContainerDom: string;
  org_uid: string | null;
  token: string | null;
  currentUser: any;
  currentOrganization: any;
  extentionUtils?: {
    stackQueryCreator: any;
    queHttp: any;
  };
  planFeatures?: any;
  containerLayout?: ContainerLayout;
  callback?: any;
}