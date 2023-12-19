import React from "react";
import { Help, Icon, PageHeader, PageLayout, cbModal } from "@contentstack/venus-components";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import TableEntries from "./BrandVoice/TableEntries";
import SideNav from "./SideNav/SideNav";
import UserToneTable from "./UserTone/UserToneTable";
import KnowledgeBaseTable from "./KnowledgeBase/Table/KnowledgeBaseTable";
import MenuModal from "./Modals/KnowledgeBase/MenuModal";
import UserToneModal from "./UserTone/Modals/UserToneModal";
import KnowledgeBaseModal from "./KnowledgeBase/Modals/KnowledgeBaseModal";
import BrandVoiceForm from "./BrandVoice/Forms/AddBrandVoiceForm";
import AddToneForm from "./UserTone/Forms/AddToneForm";
import AddKnowledgeBaseForm from "./KnowledgeBase/Forms/AddKnowledgeBaseForm";
import HomePage from "./Home/HomePage";
import { IMicroAppsObj } from "../app/common/models";

interface ModalProps {
  onHide: () => void;
  show: boolean;
  closeModal: () => void;
}
interface IHeaderAction {
  label: string | React.ReactNode;
  onClick?: React.MouseEventHandler;
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'muted' | 'light' | 'dark' | 'link' | 'sidebar';
}
interface CommonProperties {
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'muted' | 'light' | 'dark' | 'link' | 'sidebar';
}

const Layout = ({ microAppsObj }: { microAppsObj: IMicroAppsObj }) => {

  const location = useLocation();
  const history = useHistory();

  console.log("yoooooooo- ", microAppsObj.project_id);

  const Action = (): IHeaderAction[] => {
    const commonProperties: CommonProperties = {
      type: "primary",
    };

    switch (location.pathname) {

      case `/projects/${microAppsObj.project_id}`:
      case `/projects/${microAppsObj.project_id}/brand-voice`:
        return [
          {
            label: `Add Brand Voice`,
            onClick: () => {
              cbModal({
                component: (props: ModalProps) => <MenuModal {...props} history={history} microAppsObj={microAppsObj} />,
              });
            },
            ...commonProperties,
          },
        ];

      case `/projects/${microAppsObj.project_id}/user-tone`:
        return [
          {
            label: 'Add User Tone',
            onClick: () => {
              cbModal({
                component: (props: ModalProps) => <UserToneModal {...props} history={history} microAppsObj={microAppsObj} />,
              });
            },
            ...commonProperties,
          },
        ];

      case `/projects/${microAppsObj.project_id}/knowledge-base`:
        return [
          {
            label: 'Add Knowledge Base',
            onClick: () => {
              cbModal({
                component: (props: ModalProps) => <KnowledgeBaseModal {...props} history={history} microAppsObj={microAppsObj} />,
              });
            },
            ...commonProperties,
          },
        ];

      default:
        return [];
    }
  };

  const header = {
    component: (
      <PageHeader
        title={{
          label: (() => {
            let title;
            switch (location.pathname) {

              case `/projects/${microAppsObj.project_id}`:
              case `/projects/${microAppsObj.project_id}/brand-voice`:
                title = (
                  <>
                    Brand Voice&nbsp;
                    <Help
                      text="Your Brand Voice enables Intelligence Hub to access information unique to what your brand is writing, as well as your specific tone(s) and style(s)"
                      type="primary"
                      alignment="right"
                    />
                  </>
                );
                break;

              case `/projects/${microAppsObj.project_id}/user-tone`:
                title = (
                  <>
                    User Tone&nbsp;
                    <Help
                      text="User Tone enables Intelligence Hub to align content with your brand's voice and personality."
                      type="primary"
                      alignment="right"
                    />
                  </>
                );
                break;

              case `/projects/${microAppsObj.project_id}/knowledge-base`:
                title = (
                  <>
                    Kowledge Base&nbsp;
                    <Help
                      text="Knowledge Base refines contextual mastery and meticulously shapes your content, ensuring a narrative that resonates with precision."
                      type="primary"
                      alignment="right"
                    />
                  </>
                );
                break;

              default:
                title = (
                  <>
                    Default Title
                    <Help
                      text="Default help text."
                      type="primary"
                      alignment="right"
                    />
                  </>
                );
            }
            return title;
          })()
        }}
        actions={Action()}
      />
    )
  };

  const leftSidebar = {
    component: <SideNav microAppsObj={microAppsObj} />
  }

  const content = {
    component: (() => {
      switch (location.pathname) {
        case `/projects/${microAppsObj.project_id}`:
        case `/projects/${microAppsObj.project_id}/brand-voice`:
          return <TableEntries />
        case `/projects/${microAppsObj.project_id}/user-tone`:
          return <UserToneTable />
        case `/projects/${microAppsObj.project_id}/knowledge-base`:
          return <KnowledgeBaseTable />
        default:
          return null;
      }
    }
    )()
  }

  const MainLayout = ({ children }: any) => {
    return (
      <>
        <PageLayout type="list" header={header}
          leftSidebar={leftSidebar}
          content={content} hasBackground={false} version='v2' />
        {children}
      </>
    );
  };

  return (
    <div>
      <Switch>
        {/* ROUTE PART-1 main page */}

        {/* ROUTE PART-2 forms */}
        <Route path={`/projects/${microAppsObj.project_id}/brand-voice/add-brand-voice`} render={() => <BrandVoiceForm />} />
        <Route path={`/projects/${microAppsObj.project_id}/user-tone/add-user-tone`} render={() => <AddToneForm />} />
        <Route path={`/projects/${microAppsObj.project_id}/knowledge-base/add-knowledge-base`} render={() => <AddKnowledgeBaseForm />} />

        {/* following routes are juswait for react-router-dom to know about the presence of these endpoints. Main content switching is handled in `content` method.*/}
        {/* not rendering content within Route component because tha needs to happen on the PageLayout component level.*/}
        <Route path="knowledge-base" />
        <Route path="user-tone" />
        <Route path="brand-voice" />
        <Route path={`/projects/${microAppsObj.project_id}`} render={() => <MainLayout />} />

        <Route path="/" render={() => <HomePage microAppsObj={microAppsObj} />} />
      </Switch>
    </div>
  );
}

export default Layout;
