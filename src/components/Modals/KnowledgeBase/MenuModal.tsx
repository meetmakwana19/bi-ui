import React, { useState, useEffect } from "react";
import TextModal from "./TextModal";
import { GenericCard, Icon, ModalBody, ModalHeader } from "@contentstack/venus-components";

interface MenuModalProps {
  onHide: () => void;
  show: boolean;
  closeModal: any;
  navigate: any,
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
  // const navigate = useNavigation();

  // useEffect hook for handling event listener on the GenericCard component.
  useEffect(() => {
    const handleCardClick = () => {
      alert("Card Clicked");
      props.navigate("/new_entry")
    };

    const genericCardObj = document.querySelectorAll(".GenericCard");

    genericCardObj.forEach((node) => {
      node.addEventListener("click", handleCardClick);
    });

    return () => {
      // Cleanup the event listeners when the component unmounts
      genericCardObj.forEach((node) => {
        node.removeEventListener("click", handleCardClick);
      });
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

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
            <GenericCard mainContent={<TextCardContent />} disableActiveFn={true} />
            <GenericCard mainContent={<FileCardContent />} disableActiveFn={true} />
            <GenericCard mainContent={<LinkCardContent />} disableActiveFn={true} />
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