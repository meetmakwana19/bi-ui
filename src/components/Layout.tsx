import { Help, PageHeader, PageLayout, cbModal } from "@contentstack/venus-components";
import { useNavigate } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import TableEntries from "./BrandVoice/TableEntries";
import MenuModal from "./Modals/KnowledgeBase/MenuModal";

function Layout() {

  const navigate = useNavigate();
  

  const pageActions = [
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

  const header = {
    component: <PageHeader title={{
      label: (
        <>
          Brand Voice
          <Help
            text="Your Brand Voice enables Intelligence Hub to access information unique to what you are writing, as well as your specific tone(s) and style(s)"
            type="primary"
            alignment="right"
          />
        </>
      )
      //@ts-ignore
    }} actions={pageActions}
    />
  }

  const leftSidebar = {
    component: <SideNav />
  }

  const content = {
    component: <TableEntries />
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
