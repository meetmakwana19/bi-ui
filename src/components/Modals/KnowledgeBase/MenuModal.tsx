import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import TextModal from "./TextModal";

interface MenuModalProps{
  onHide: () => void;
  show: boolean;
}

const MenuModal: React.FC<MenuModalProps> = (props) => {
  const [textModalShow, setTextModalShow] = useState(false);

  return (
    <Modal {...props} size="lg" aria-labelledby="KBModalLabel" centered>
      <Modal.Header closeButton>
        <Modal.Title id="KBModalLabel">
          <h1 className="modal-title fs-5" id="KBModalLabel">
            Add to knowledge base hehe
          </h1>
          <p className="bold-gray m-0">
            Give Brand Intelligence facts to more accurately write about any
            topic.
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex p-4 fs-7">
        <div className="modal-body">
          <h6 style={{ color: "#000000c9" }}>
            What type of content would you like to give to Brand Intelligence?
            Please select one that applies.
          </h6>
          <div className="d-flex p-3 square-btn-div">
            <button
              className="square-btn p-4 border text-center rounded-4"
              type="button"
                // onClick={() => {
                //   setTextModalShow(true);
                // //   props.setMenuModalShow(false);
                //   props.onHide();
                // }}
              onClick={() => setTextModalShow(true)}
            //   data-bs-dismiss="modal"
            >
              <i
                className="bi bi-text-left fs-1"
                style={{ color: "#675af2" }}
              ></i>
              <p className="fw-semibold">From text</p>
              <p style={{ fontSize: "0.85rem" }}>Write or copy paste text.</p>
            </button>
            <button
              className="square-btn p-4 border text-center rounded-4 btn mx-4"
              type="button"
            >
              <i
                className="bi bi-file-earmark-text fs-1"
                style={{ color: "#675af2" }}
              ></i>
              <p className="fw-semibold">Upload file</p>
              <p style={{ fontSize: "0.85rem" }}>.pdf supported</p>
            </button>
            <button
              className="square-btn p-4 border text-center rounded-4"
              type="button"
            >
              <i
                className="bi bi-link-45deg fs-1"
                style={{ color: "#675af2" }}
              ></i>
              <p className="fw-semibold">Enter URL</p>
              <p style={{ fontSize: "0.85rem" }}>
                Brand Intelligence will scan a site.
              </p>
            </button>
          </div>
          <p className="bold-gray m-0">
            You must own or have permission to use any content you submit to
            Brand Intelligence. Using Brand Intelligence to violate someone
            else's rights is a violation of our Terms of Service.
          </p>
          <TextModal
            show={textModalShow}
            // setMenuModalShow={props.setMenuModalShow}
            onHide={() => setTextModalShow(false)}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MenuModal