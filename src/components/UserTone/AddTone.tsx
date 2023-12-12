import { Button, cbModal } from "@contentstack/venus-components";
import AddUserToneModal from './Modals/AddUserToneModal';
import { useHistory } from "react-router-dom";
import { LocationDescriptor } from 'history';

const AddTone = () => {

  const history = useHistory();
  const navigate = (path: LocationDescriptor<unknown>) => {
    history.push(path);
  }

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

