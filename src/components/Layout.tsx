import { Help, PageHeader, PageLayout, cbModal } from "@contentstack/venus-components";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import TableEntries from "./BrandVoice/TableEntries";
import MenuModal from "./Modals/KnowledgeBase/MenuModal";
import UserToneTable from "./UserTone/UserToneTable";
import AddEntry from "./BrandVoice/Forms/AddEntry";
import AddUserToneForm from "./UserTone/Forms/AddUserToneForm";
import AddUserToneModal from "./UserTone/Modals/AddUserToneModal";

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

  const header = {
    component: <PageHeader title={{
      label: (
        <>
          {location.pathname === "/" ? (
            <>
              Brand Voice
              <Help
                text="Your Brand Voice enables Intelligence Hub to access information unique to what you are writing, as well as your specific tone(s) and style(s)"
                type="primary"
                alignment="right"
              />
            </>
          ) : (
            <>
              User Tone
              <Help
                text="User Tone enables Intelligence Hub to align content with your brand's voice and personality."
                type="primary"
                alignment="right"
              />
            </>
          )}
        </>
      )
      //@ts-ignore
    }} actions={location.pathname === "/" ? knowledgeAction : toneAction}
    />
  }

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
