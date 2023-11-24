import { Help, PageHeader, PageLayout, cbModal, Icon } from "@contentstack/venus-components";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import TableEntries from "./BrandVoice/TableEntries";
import MenuModal from "./Modals/KnowledgeBase/MenuModal";
import UserToneTable from "./UserTone/UserToneTable";
import AddEntry from "./BrandVoice/Forms/AddEntry";
import AddUserToneForm from "./UserTone/Forms/AddUserToneForm";
import AddUserToneModal from "./UserTone/Modals/AddUserToneModal";
import ToneEntryHeader from "./Header/ToneEntryHeader";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

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

  // const actions = location.pathname === "/" ? knowledgeAction : toneAction;


  // const header = {
  //   component: <PageHeader title={{
  //     label: (
  //       <>
  //         {location.pathname === "/" ? (
  //           <>
  //             Brand Voice
  //             <Help
  //               text="Your Brand Voice enables Intelligence Hub to access information unique to what you are writing, as well as your specific tone(s) and style(s)"
  //               type="primary"
  //               alignment="right"
  //             />
  //           </>
  //         ) : (
  //           <>
  //             User Tone
  //             <Help
  //               text="User Tone enables Intelligence Hub to align content with your brand's voice and personality."
  //               type="primary"
  //               alignment="right"
  //             />
  //           </>
  //         )}
  //       </>
  //     )
  //     //@ts-ignore
  //   }} actions={location.pathname === "/" ? knowledgeAction : toneAction}
  //   />
  // }
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

              case "/add_new_user_tone":
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

                case "/new_entry":
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
          location.pathname === "/" ? knowledgeAction : toneAction 
        }
      />
    )
  };


  const leftSidebar = {
    component: <SideNav />
  }

  const content = {
    component: <Routes>
      <Route path="/" element={<TableEntries />} />
      <Route path="/user" element={<UserToneTable />} />
      <Route path="new_entry" element={<AddEntry />} />
      <Route path="add_new_user_tone" element={<AddUserToneForm />} />
    </Routes>
  }

  return (
    <div>
      <PageLayout type="list" header={header}
        leftSidebar={leftSidebar}
        content={content} hasBackground={true} version='v2' />
    </div>
  );
}

export default Layout;
