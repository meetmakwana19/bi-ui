import React, { useEffect } from "react";
import { GenericCard, Icon, ModalBody, ModalHeader } from "@contentstack/venus-components";
import { IMicroAppsObj } from "../../../app/common/models";

interface MenuModalProps {
  onHide: () => void;
  show: boolean;
  closeModal: () => void;
  history: any,
  microAppsObj: IMicroAppsObj,
}

const TextCardContent: React.FC = () => {
  return (
    <div className="menu-card-content">
      <Icon icon="MultiLineText" size="large" style={{ color: "#675af2" }} />
      <p className="fw-semibold">From text</p>
      <p style={{ fontSize: "0.85rem" }}>Write or copy paste text.</p>
    </div>
  )
}
const FileCardContent: React.FC = () => {
  return (
    <div className="menu-card-content">
      <Icon icon="File" size="large" style={{ color: "#675af2" }} />
      <p className="fw-semibold">Upload file</p>
      <p style={{ fontSize: "0.85rem" }}>.pdf supported</p>
    </div>
  )
}
const LinkCardContent: React.FC = () => {
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



const UserToneModal: React.FC<MenuModalProps> = (props) => {
    
    // useEffect hook for handling event listener on the GenericCard component.
    useEffect(() => {
      const handleCardClick = () => {
        props.closeModal();
        props.history.push(`/projects/${props.microAppsObj.project_id}/user-tone/add-user-tone`)
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
    <div>
      <ModalHeader title="Add User Tone" closeModal={props.closeModal} closeIconTestId="cs-default-header-close" />
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
        </div>
      </ModalBody>
    </div>
  )
}

export default UserToneModal