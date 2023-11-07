import React, { useState } from "react";
import SideNav from "../SideNav";
import Header from "../Header";
import TextModal from "../Modals/KnowledgeBase/TextModal";
import FileModal from "../Modals/KnowledgeBase/FileModal";
import LinkModal from "../Modals/KnowledgeBase/LinkModal";
import EntriesTable from "./EntriesTable";

interface BrandVoiceProps {
  toggleBrandVoiceClick: () => void;
  isBrandVoiceOpen: boolean;
}

const BrandVoice: React.FC<BrandVoiceProps> = ({ toggleBrandVoiceClick, isBrandVoiceOpen }) => {
  const [modalShow, setModalShow] = useState(false);
  const [fileModalShow, setFileModalShow] = useState(false);
  const [linkModalShow, setLinkModalShow] = useState(false)
  return (
    <div className="grid">
      <SideNav
        toggleBrandVoiceClick={toggleBrandVoiceClick}
        isBrandVoiceOpen={isBrandVoiceOpen}
      />
      <Header />
      <div className="know-base py-3 px-4">
        <h3>All knowledge base</h3>
        <p className="bold-gray">
          Your Brand Voice enables Jasper to access information unique to what
          you are writing, as well as your specific tone(s) and style(s).
        </p>

        <div className="d-flex justify-content-between">
          <div className="input-group mb-3 w-50">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name, description or tags"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <button
            type="button"
            className="btn btn-primary add-knowledge-btn"
            data-bs-toggle="modal"
            data-bs-target="#menuModal"
          >
            <i className="bi bi-plus-lg"></i> Add Knowledge
          </button>

          <div
            className="modal fade"
            id="menuModal"
            tabIndex={-1}
            aria-labelledby="KBModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header align-items-start flex-row justify-content-between">
                  <div>
                    <h1 className="modal-title fs-5" id="KBModalLabel">
                      Add to knowledge base
                    </h1>
                    <p className="bold-gray m-0">
                      Give Brand Intelligence facts to more accurately write
                      about any topic.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h6 style={{ color: "#000000c9" }}>
                    What type of content would you like to give to Brand
                    Intelligence? Please select one that applies.
                  </h6>
                  <div className="d-flex p-3 square-btn-div">
                    <button
                      className="square-btn p-4 border text-center rounded-4"
                      type="button"
                      onClick={() => setModalShow(true)}
                      data-bs-dismiss="modal"
                    >
                      <i
                        className="bi bi-text-left fs-1"
                        style={{ color: "#675af2" }}
                      ></i>
                      <p className="fw-semibold">From text</p>
                      <p style={{ fontSize: "0.85rem" }}>
                        Write or copy paste text.
                      </p>
                    </button>
                    <button
                      className="square-btn p-4 border text-center rounded-4 btn mx-4"
                      type="button"
                      onClick={() => setFileModalShow(true)}
                      data-bs-dismiss="modal"
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
                      onClick={() => setLinkModalShow(true)}
                      data-bs-dismiss="modal"
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
                    You must own or have permission to use any content you
                    submit to Brand Intelligence. Using Brand Intelligence to
                    violate someone else's rights is a violation of our Terms of
                    Service.
                  </p>
                  <TextModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  <FileModal
                    show={fileModalShow}
                    onHide={() => setFileModalShow(false)}
                  />
                  <LinkModal
                    show={linkModalShow}
                    onHide={() => setLinkModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <EntriesTable/>
      </div>
    </div>
  );
}

export default BrandVoice;
