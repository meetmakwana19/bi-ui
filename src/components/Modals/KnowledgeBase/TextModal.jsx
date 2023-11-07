import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function TextModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="modal-title fs-5" id="KBModalLabel">
            Add to knowledge base
          </h1>
          <p className="bold-gray m-0">
            Give Brand Intelligence facts to more accurately write about any
            topic.
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4 fs-7">
        <form>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label fw-semibold">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              aria-describedby="nameHelp"
              placeholder="Enter a name to continue"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="descriptionInput"
              className="form-label fw-semibold"
            >
              Background description
            </label>
            <textarea
              className="form-control"
              id="descriptionInput"
              rows="3"
              placeholder="Write or paste a copy    "
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tagsInput" className="form-label fw-semibold">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tagsInput"
              aria-describedby="tagsHelp"
              placeholder="Select from existing tags or type to create new ones"
            />
            <div id="tagsHelp" className="form-text mx-2">
              Tags will help you find pertinent Knowledge Base entries more
              easily.
            </div>
          </div>
        </form>{" "}
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide} className="btn-light">
          Back
        </Button> */}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            alert("Knowledge base added");
            props.onHide();
          }}
        >
          Add to Knowledge Base
        </button>
      </Modal.Footer>
    </Modal>
  );
}
