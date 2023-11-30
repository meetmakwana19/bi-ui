import { Button, cbModal } from "@contentstack/venus-components";
import AddUserToneModal from './Modals/AddUserToneModal';
import { useNavigate } from "react-router-dom";

const AddTone = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    cbModal({
      // passing down navigate object because MenuModal isn't directly under the router component tree. 
      component: (props: any) => <AddUserToneModal {...props} navigate={navigate}/>,
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

