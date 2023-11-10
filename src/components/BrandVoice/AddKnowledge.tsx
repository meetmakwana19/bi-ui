import { Button, cbModal } from "@contentstack/venus-components";
import React from "react";
import MenuModal from "../Modals/KnowledgeBase/MenuModal";

function AddKnowledge() {

  const onClose = () => {
    console.log("Closing");
    
  }
  const handleClick = () => {
    cbModal({
      component: (props) => <MenuModal {...props}/>,
      modalProps: {
        onClose,
        onOpen: () => {
          console.log("Opening");
        }
      } 
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
