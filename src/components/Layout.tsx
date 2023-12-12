import React, { Children } from 'react';
// import ReactDOM from 'react-dom';
import { Help, PageHeader, PageLayout, cbModal, Icon } from "@contentstack/venus-components";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import TableEntries from "./BrandVoice/TableEntries";
import MenuModal from "./Modals/KnowledgeBase/MenuModal";
import UserToneTable from "./UserTone/UserToneTable";
import AddUserToneModal from "./UserTone/Modals/AddUserToneModal";
// import { LocationDescriptor } from 'history';
import AddToneForm from "./UserTone/Forms/AddToneForm";
import AddKnowledgeForm from "./BrandVoice/Forms/AddKnowledgeForm";
import BrandVoice from "./BrandVoice/BrandVoice";


function Layout(props: any) {
  const location = useLocation();
  const history = useHistory();
  
  const knowledgeAction = [
    {
      label: '+ Add Knowledge',
      onClick: (props) => {
        cbModal({
          // passing down navigate object because MenuModal isn't directly under the router component tree. 
          component: (props: any) => <MenuModal {...props} history={history} />,
        })
      },
      type: 'primary'
    }
  ]
  const toneAction = [
    {
      label: '+ Add Tone',
      onClick: (props) => {
        cbModal({
          // passing down navigate object because MenuModal isn't directly under the router component tree. 
          component: (props: any) => <AddUserToneModal {...props} history={history} />,
        })
      },
      type: 'primary'
    }
  ]

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

                // case "/add_tone":
                //   title = (
                //     <>
                //       <Icon icon="BackArrow" size="small" hover={true} hoverType="secondary" shadow="medium" onClick={() => {
                //         history.goBack()
                //       }} />
                //       Add User Tone &nbsp;
                //       <Help
                //         text="Give Brand Intelligence facts to more accurately write about any topic."
                //         type="primary"
                //         alignment="right"
                //       />
                //     </>
                //   );
                //   break;

                // case "/add_knowledge":
                title = (
                  <>
                    <Icon icon="BackArrow" size="small" hover={true} hoverType="secondary" shadow="medium" onClick={() => {
                      history.goBack()
                    }} />
                    Add to knowledge base &nbsp;
                    <Help
                      text="Give Brand Intelligence facts to more accurately write about any topic."
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

        // @ts-ignore
        actions={
          location.pathname === "/" || location.pathname === "/knowledge_base" ? knowledgeAction : toneAction
        }

      />
    )
  };


  const leftSidebar = {
    component: <SideNav />
  }

  // const content = {
  //   component: 
  //   <>
  //     <Switch>      
  //       <Route path="/" render={() => <TableEntries />} />
  //       <Route path="/user" render={() => <UserToneTable />} />
  //       <Route path="/knowledge_base" render={() => <TableEntries />} />
  //     </Switch>
  //   </>
  // }

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
      {/* <Switch>
            <Route path={["/", "/brand_voice"]} render={() => <MainLayout></MainLayout> } />
            <Route path="/user" />
            <Route path="/knowledge_base" />
            <Route path="/knowledge_base/add_knowledge" render = {() => <AddKnowledgeForm />} />
            <Route path="/user/add_tone" render = {() => <AddToneForm />} />
            <Route/>
          </Switch> */}
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
