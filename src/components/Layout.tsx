import React from "react";
import { Help, Icon, PageHeader, PageLayout, cbModal } from "@contentstack/venus-components";
import { Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import TableEntries from "./BrandVoice/TableEntries";
import SideNav from "./SideNav/SideNav";
import UserToneTable from "./UserTone/UserToneTable";
import KnowledgeBaseTable from "./KnowledgeBase/Table/KnowledgeBaseTable";
import MenuModal from "./Modals/KnowledgeBase/MenuModal";
import AddUserToneModal from "./UserTone/Modals/AddUserToneModal";
import KnowledgeBaseModal from "./KnowledgeBase/Modals/KnowledgeBaseModal";
import BrandVoiceForm from "./BrandVoice/Forms/AddBrandVoiceForm";
import AddToneForm from "./UserTone/Forms/AddToneForm";
import AddKnowledgeBaseForm from "./KnowledgeBase/Forms/AddKnowledgeBaseForm";

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

const Layout = () => {

  const location = useLocation();
  const navigate = useNavigate();

  console.log("yoooooooo- ", location.pathname);

  const Action = (): IHeaderAction[] => {
    const commonProperties: CommonProperties = {
      type: "primary",
    };

    switch (location.pathname) {

      case "/" || "/brand_voice":
        return [
          {
            label: `Add Brand Voice`,
            onClick: () => {
              cbModal({
                component: (props: ModalProps) => <MenuModal {...props} navigate={navigate} />,
              });
            },
            ...commonProperties,
          },
        ];

      case "/user-tone":
        return [
          {
            label: 'Add User Tone',
            onClick: () => {
              cbModal({
                component: (props: ModalProps) => <AddUserToneModal {...props} navigate={navigate} />,
              });
            },
            ...commonProperties,
          },
        ];

      case "/knowledge-base":
        return [
          {
            label: 'Add Knowledge Base',
            onClick: () => {
              cbModal({
                component: (props: ModalProps) => <KnowledgeBaseModal {...props} navigate={navigate} />,
              });
            },
            ...commonProperties,
          },
        ];

      // Add more cases for different paths if needed
      default:
        // Default case
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

              case  "/" || "/brand-voice":
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

              case "/user-tone":
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

              case "/knowledge-base":
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
    component: <SideNav />
  }

  const content = {
    component: (() => {
      switch (location.pathname) {
        case "/" || "/brand-voice":
          return <TableEntries />
        case "/user-tone":
          return <UserToneTable />
        case "/knowledge-base":
          return <KnowledgeBaseTable />
        default:
          return null;
      }
    }
    )()
  }

  const MainLayout = ({ children }: React.PropsWithChildren) => {
    return (
      <>
        <PageLayout type="list" header={header}
          leftSidebar={leftSidebar}
          content={content} hasBackground={false} version='v2' />
        {children}
        <Outlet />
      </>
    );
  };

  return (
    <div>
      <Routes>
        <Route path="/intelligence-hub" element={<h1>Hello World</h1>} />
        {/* ROUTE PART-1 main page */}
        <Route path="/" element={<MainLayout />}>
          {/* following routes are juswait for react-router-dom to know about the presence of these endpoints. Main content switching is handled in `content` method.*/}
          {/* not rendering content within Route component because tha needs to happen on the PageLayout component level.*/}
          <Route path="user-tone" />
          <Route path="knowledge-base" />
        </Route>

        {/* ROUTE PART-2 forms */}
        <Route path="/brand-voice/add-brand-voice" element={<BrandVoiceForm />} />
        <Route path="/user-tone/add-user-tone" element={<AddToneForm />} />
        <Route path="/knowledge-base/add-knowledge-base" element={<AddKnowledgeBaseForm />} />
      </Routes>
    </div>
  );
}

export default Layout;
