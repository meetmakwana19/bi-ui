import React from "react";
import { Button, cbModal } from "@contentstack/venus-components";
import MenuModal from "../Modals/KnowledgeBase/MenuModal";
import { useHistory } from "react-router-dom";

interface ModalProps {
  onHide: () => void;
  show: boolean;
  closeModal: () => void;
}

function AddKnowledge() {
  
  const history = useHistory();
  
  const handleClick = () => {
    cbModal({
      // passing down navigate object because MenuModal isn't directly under the router component tree. 
      component: (props: ModalProps) => <MenuModal {...props} history={history}/>,
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
