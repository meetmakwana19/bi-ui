import { Button, cbModal } from "@contentstack/venus-components";
import MenuModal from "../Modals/KnowledgeBase/MenuModal";
import { useHistory } from "react-router-dom";

function AddKnowledge() {
  const histroy = useHistory();
  const navigate = (path: any) => {
    // react-router-dom v6 syntax :
    histroy.push(path);
  }
  
  const handleClick = () => {
    cbModal({
      // passing down navigate object because MenuModal isn't directly under the router component tree. 
      component: (props: any) => <MenuModal {...props} navigate={navigate}/>,
    })
  }
  return (
    <div>
      <Button icon="AddPlus" buttonType="primary" id="add-knowledge-modal" onClick={handleClick}>
        Add Knowledge
      </Button>
    </div>
  );
}

export default AddKnowledge;
