import React, { useState } from "react";
import DeleteModal from "../Modals/KnowledgeBase/DeleteModal";

function DotsDropdown() {
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  return (
    <div class="btn-group dropstart border">
      <button
        type="button"
        class="btn btn-light btn-sm"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="bi bi-three-dots-vertical"></i>
      </button>{" "}
      <ul class="dropdown-menu p-0">
        <li>
          <button type="button" class="btn btn-light">
            <i class="bi bi-star"></i> Add to favorites
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-light">
            <i class="bi bi-pencil-square"></i> Rename
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-light">
            <i class="bi bi-copy"></i> Duplicate
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-danger" onClick={() => setDeleteModalShow(true)}>
            <i class="bi bi-trash"></i> Delete
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
