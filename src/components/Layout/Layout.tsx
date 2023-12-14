import { MouseEventHandler } from "react";
import { Help, PageHeader, PageLayout, cbModal} from "@contentstack/venus-components";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import TableEntries from "../BrandVoice/TableEntries";
import MenuModal from "../Modals/KnowledgeBase/MenuModal";
import UserToneTable from "../UserTone/UserToneTable";
import AddUserToneModal from "../UserTone/Modals/AddUserToneModal";
import AddToneForm from "../UserTone/Forms/AddToneForm";
import AddKnowledgeForm from "../BrandVoice/Forms/AddKnowledgeForm";
import BrandVoice from "../BrandVoice/BrandVoice";


interface ModalProps {
  onHide: () => void;
  show: boolean;
  closeModal: () => void;
}
interface IHeaderAction {
  label: string | React.ReactNode;
  onClick?: MouseEventHandler;
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'muted' | 'light' | 'dark' | 'link' | 'sidebar';
}
interface CommonProperties{
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'muted' | 'light' | 'dark' | 'link' | 'sidebar';
}


function Layout() {
  const location = useLocation();
  const history = useHistory();

  const knowledgeAction = () : IHeaderAction[] => {
    const commonProperties: CommonProperties  = {
      type: "primary",
    };
  
    switch (location.pathname) {

      case "/" || "/brand_voice":
        return [
          {
            label: 'Add Knowledge',
            onClick: () => {
              cbModal({
                component: (props: ModalProps) => <MenuModal {...props} history={history} />,
              });
            },
            ...commonProperties,
          },
        ];

        case "/user":
          return [
            {
              label: 'Add Tone',
              onClick: () => {
                cbModal({
                  component: (props: ModalProps) => <AddUserToneModal {...props} history={history} />,
                });
              },
              ...commonProperties,
            },
          ];

          case "/knowledge_base":
            return [
              {
                label: 'Add Knowledge',
                onClick: () => {
                  cbModal({
                    component: (props: ModalProps) => <MenuModal {...props} history={history} />,
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

              case "/" || "/brand_voice":
                title = (
                  <>
                    Brand Voice
                    <Help
                      text="Your Brand Voice enables Intelligence Hub to access information unique to what you are writing, as well as your specific tone(s) and style(s)"
                      type="primary"
                      alignment="right"
                    />
                  </>
                );
                break;

              case "/user":
                title = (
                  <>
                    User Tone
                    <Help
                      text="User Tone enables Intelligence Hub to align content with your brand's voice and personality."
                      type="primary"
                      alignment="right"
                    />
                  </>
                );
                break;

              case "/knowledge_base":
                title = (
                  <>
                    Kowledge Base
                    <Help
                      text="Your Brand Voice enables Intelligence Hub to access information unique to what you are writing, as well as your specific tone(s) and style(s)"
                      type="primary"
                      alignment="right"
                    />
                  </>
                );
                break;

              // Add more cases as needed

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

        actions={
          knowledgeAction()
        }

      />
    )
  };

  const leftSidebar = {
    component: <SideNav />
  }

  const content = {
    component: (() => {
      switch (location.pathname) {
        case "/" || "/brand_voice":
          return <TableEntries />
        case "/user":
          return <UserToneTable />
        case "/knowledge_base":
          return <TableEntries />
        default:
          return null;
      }
    }
    )()
  }

  const MainLayout = ({ children }: React.PropsWithChildren<unknown>) => {
    return (
      <>
        <PageLayout
          type="list"
          header={header}
          leftSidebar={leftSidebar}
          content={content} hasBackground={false} version='v2'
        />

        {children}
      </>
    );
  };

  return (
    <div>
      <Switch>
        <Route path="/user/add_tone" render={() => <AddToneForm />} />
        <Route path="/knowledge_base/add_knowledge" render={() => <AddKnowledgeForm />} />
        <Route path="/brand_voice" render={() => <BrandVoice />} />
        <Route path="/" render={() => <MainLayout />} />
      </Switch>
    </div>
  );
}

export default Layout;