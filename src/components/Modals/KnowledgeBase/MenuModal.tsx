import React, { useState } from "react";
import TextModal from "./TextModal";
import { GenericCard, Icon, ModalBody, ModalHeader } from "@contentstack/venus-components";

interface MenuModalProps {
  onHide: () => void;
  show: boolean;
  closeModal: any;
}

const TextCardContent: React.FC<any> = () => {
  return (
    <div className="menu-card-content">
      <Icon icon="MultiLineText" size="large" style={{ color: "#675af2" }} />
      <p className="fw-semibold">From text</p>
      <p style={{ fontSize: "0.85rem" }}>Write or copy paste text.</p>
    </div>
  )
}
const FileCardContent: React.FC<any> = () => {
  return (
    <div className="menu-card-content">
      <Icon icon="File" size="large" style={{ color: "#675af2" }} />
      <p className="fw-semibold">Upload file</p>
      <p style={{ fontSize: "0.85rem" }}>.pdf supported</p>
    </div>
  )
}
const LinkCardContent: React.FC<any> = () => {
  return (
    <div className="menu-card-content">
      <Icon icon="Link" size="large" style={{ color: "#675af2" }} />
      <p className="fw-semibold">Enter URL</p>
      <p style={{ fontSize: "0.85rem" }}>
        Brand Intelligence will scan a site.
      </p>
    </div>
  )
}
const MenuModal: React.FC<MenuModalProps> = (props) => {
  const [textModalShow, setTextModalShow] = useState(false);

  return (
    <>
      <ModalHeader title="Add to knowledge base" closeModal={props.closeModal} closeIconTestId="cs-default-header-close" />
      <ModalBody>
        <div className="modal-body">
          <h6 >
            What type of content would you like to give to Intelligence Hub?
            Please select one that applies.
          </h6>
          <div className="square-btn-div">
            <GenericCard mainContent={<TextCardContent />}/>
            <GenericCard mainContent={<FileCardContent />} />
            <GenericCard mainContent={<LinkCardContent />} />
          </div>
          <p className="bold-gray">
            You must own or have permission to use any content you submit to
            Intelligence Hub. Using Intelligence Hub to violate someone
            else's rights is a violation of our Terms of Service.
          </p>
          <TextModal
            show={textModalShow}
            // setMenuModalShow={props.setMenuModalShow}
            onHide={() => setTextModalShow(false)}
          />
        </div>
      </ModalBody>
    </>
  );
}

export default MenuModal