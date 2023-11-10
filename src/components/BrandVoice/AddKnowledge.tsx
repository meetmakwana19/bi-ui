import { Button, cbModal } from "@contentstack/venus-components";
import MenuModal from "../Modals/KnowledgeBase/MenuModal";

function AddKnowledge() {
  const handleClick = () => {
    cbModal({
      component: (props: any) => <MenuModal {...props}/>,
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
