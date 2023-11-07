import React, { useState } from "react";
import DeleteModal from "../Modals/KnowledgeBase/DeleteModal";

interface DotsDropdownProps{}

const DotsDropdown: React.FC<DotsDropdownProps>  = () => {
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  return (
    <div className="btn-group dropstart border">
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-three-dots-vertical"></i>
      </button>{" "}
      <ul className="dropdown-menu p-0">
        <li>
          <button type="button" className="btn btn-light">
            <i className="bi bi-star"></i> Add to favorites
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-light">
            <i className="bi bi-pencil-square"></i> Rename
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-light">
            <i className="bi bi-copy"></i> Duplicate
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-danger" onClick={() => setDeleteModalShow(true)}>
            <i className="bi bi-trash"></i> Delete
          </button>
        </li>
      </ul>
      <DeleteModal
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
      />
    </div>
  );
}

export default DotsDropdown;
