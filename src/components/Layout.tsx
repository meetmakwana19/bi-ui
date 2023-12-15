import { Help, PageHeader, PageLayout, cbModal, Icon } from "@contentstack/venus-components";
import { Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import TableEntries from "./BrandVoice/TableEntries";
import MenuModal from "./Modals/KnowledgeBase/MenuModal";
import UserToneTable from "./UserTone/UserToneTable";
import AddUserToneModal from "./UserTone/Modals/AddUserToneModal";
import BrandVoice from "./BrandVoice/BrandVoice";
import AddToneForm from "./UserTone/Forms/AddToneForm";
import AddKnowledgeForm from "./BrandVoice/Forms/AddKnowledgeForm";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("yoooooooo- ", location.pathname);
  

  const knowledgeAction = [
    {
      label: '+ Add Knowledge',
      onClick: () => {
        cbModal({
          // passing down navigate object because MenuModal isn't directly under the router component tree. 
          component: (props: any) => <MenuModal {...props} navigate={navigate} />,
        })
      },
      type: 'primary'
    }
  ]
  const toneAction = [
    {
      label: '+ Add Tone',
      onClick: () => {
        cbModal({
          // passing down navigate object because MenuModal isn't directly under the router component tree. 
          component: (props: any) => <AddUserToneModal {...props} navigate={navigate} />,
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

              case "/":
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

              case "/add_tone":
                title = (
                  <>
                    <Icon icon="BackArrow" size="small" hover={true} hoverType="secondary" shadow="medium" onClick={() => {
                      navigate(-1)
                    }} />
                    Add User Tone &nbsp;
                    <Help
                      text="Give Brand Intelligence facts to more accurately write about any topic."
                      type="primary"
                      alignment="right"
                    />
                  </>
                );
                break;

              case "/add_knowledge":
                title = (
                  <>
                    <Icon icon="BackArrow" size="small" hover={true} hoverType="secondary" shadow="medium" onClick={() => {
                      navigate(-1)
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
        //@ts-ignore
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
  //   <Routes>
  //     <Route path="" element={<TableEntries />} />
  //     <Route path="user" element={<UserToneTable />} />
  //     <Route path="knowledge_base" element={<TableEntries />} />
  //     {/* <Route path="add_knowledge" element={<AddEntry />} /> */}
  //     {/* <Route path="add_tone" element={<AddUserToneForm />} /> */}
  //   </Routes>
  // }
  const content = {
    component: (() => {
      switch (location.pathname) {
        case "/" || "/intelligencehub":
          return <TableEntries />
        case "/user":
          return <UserToneTable />
        case "/knowledge_base":
          return <TableEntries />
        default:
          return null;
      }
    }
      // <BrowserRouter>
      // <Router>
      //   <Switch>
      //     <Route path="/intelligencehub" element={<TableEntries />} />
      //     <Route path="/user" element={<UserToneTable />} />
      //     <Route path="/knowledge_base" element={<TableEntries />} />
      //     {/* <Route path="add_knowledge" element={<AddEntry />} /> */}
      //     {/* <Route path="add_tone" element={<AddUserToneForm />} /> */}
      //   </Switch>
      // </Router>
      // </BrowserRouter>
    )()
    // component: <TableEntries />
  }


  const MainLayout = ({ children }: React.PropsWithChildren<{}>) => {
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
        <Route path="/intelligence-hub" element={<h1>Hello World</h1>}/>
        {/* ROUTE PART-1 main page */}
        <Route path="/" element={<MainLayout />}>
          {/* following routes are juswait for react-router-dom to know about the presence of these endpoints. Main content switching is handled in `content` method.*/}
          {/* not rendering content within Route component because tha needs to happen on the PageLayout component level.*/}
          <Route path="user" />
          <Route path="knowledge_base" />
        </Route>

        {/* ROUTE PART-2 forms */}
        <Route path="add_knowledge" element={<AddKnowledgeForm />} />
        <Route path="add_tone" element={<AddToneForm />} />
      </Routes>
    </div>
  );
}

export default Layout;
