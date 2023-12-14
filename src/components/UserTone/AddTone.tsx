import React from "react";
import { Button, cbModal } from "@contentstack/venus-components";
import AddUserToneModal from './Modals/AddUserToneModal';
import { useHistory } from "react-router-dom";


interface ModalProps {
  onHide: () => void;
  show: boolean;
  closeModal: () => void;
}

const AddTone = () => {

  const history = useHistory();

  const handleClick = () => {
    cbModal({
      // passing down navigate object because MenuModal isn't directly under the router component tree. 
      component: (props: ModalProps) => <AddUserToneModal {...props} history={history}/>,
    })
  }

  return (
    <div>
      <Button icon="AddPlus" buttonType="primary" id="add-knowledge-modal" onClick={handleClick}>
        Add Tone
      </Button>
    </div>
  )
}

export default AddTone

