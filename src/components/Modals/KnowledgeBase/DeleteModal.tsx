import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface DeleteModalProps {
    onHide: () => void;
    show: boolean;
}

const DeleteModal: React.FC<DeleteModalProps> = (props) => {
  return (
    <Modal
      {...props}
      // size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="text-center">
        <i className="bi bi-exclamation-triangle fs-1 bold-gray"></i>
        <h4>Delete</h4>
        <p>Are you sure you want to delete this entry ?</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button onClick={() => {
            props.onHide();
            alert("Entry deleted")
        }} className="btn-danger">Yes, I'm sure</Button>
        <Button onClick={props.onHide} className="btn-light">No, cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal