import React from "react";
import { NavLink } from "react-router-dom";

interface SideNavProps {
  toggleBrandVoiceClick?: () => void;
  isBrandVoiceOpen?: boolean;

}

const SideNav: React.FC<SideNavProps> = ({ toggleBrandVoiceClick, isBrandVoiceOpen }) => {
  return (
    <div className="side-nav px-2">
      <div className="border-bottom m-2 pe-0">
        <p className="d-inline-flex gap-1 w-100">
          <a
            className="btn btn-light sidenav-btn px-1 ps-2 d-flex  justify-content-between w-100"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <span className="bi bi-person-circle"> Profile</span>{" "}
            <i className="bi bi-chevron-down ms-5"></i>
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body mb-4">
            <ul>
              <li>Settings</li>
              <li>Output History</li>
              <li>Trash</li>
              <li>Team info</li>
              <li>Help</li>
              <li>Sign out</li>
            </ul>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary sidenav-btn m-2"
        style={{ background: "#675AF2" }}
      >
        <i className="bi bi-plus-lg"></i> Create Content
      </button>

      <div>
        <ul className="p-0 mt-3">
          <li className="my-3">
            <NavLink to="/" className="d-inline-block w-100">
              <button
                type="button"
                className="btn btn-light sidenav-btn text-start bold-gray w-100"
              >
                <i className="bi bi-house-door"></i> Dashboard
              </button>
            </NavLink>
          </li>
          <li className="">
            <div className="d-inline-block gap-1 my-0 w-100">
              <a
                className="btn btn-light sidenav-btn text-start bold-gray w-100 d-flex justify-content-between"
                data-bs-toggle="collapse"
                href="#collapseBrandVoice"
                role="button"
                aria-expanded="false"
                // aria-controls="collapseBrandVoice"
                onClick={toggleBrandVoiceClick}
              >
                <div>
                  <i className="bi bi-megaphone"></i> Brand Voice{" "}
                </div>
                <i className="bi bi-chevron-down ms-5"></i>
              </a>
            </div>
            <div
              className={`${isBrandVoiceOpen ? "show" : "collapse"} `}
              id="collapseBrandVoice"
            >
              <div className="card card-body mb-4">
                <ul className="p-0">
                  <li>
                    {" "}
                    <NavLink
                      to="/knowledge_base"
                      className="d-inline-block w-100"
                    >
                      <button
                        type="button"
                        className="btn btn-light sidenav-btn text-start bold-gray w-100"
                      >
                        Knowledge Base
                      </button>
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      to="/voice_n_tone"
                      className="d-inline-block w-100"
                    >
                      <button
                        type="button"
                        className="btn btn-light sidenav-btn text-start bold-gray w-100"
                      >
                        Voice & Tone
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="my-3">
            <NavLink to="/chat" className="d-inline-block w-100">
              <button
                type="button"
                className="btn btn-light sidenav-btn text-start bold-gray w-100"
              >
                <i className="bi bi-wechat"></i> Chat
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav