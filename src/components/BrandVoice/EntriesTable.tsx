import React from "react";
import DotsDropdown from "./DotsDropdown";

interface EntriesTableProps {}

const EntriesTable: React.FC<EntriesTableProps> = () => {
  return (
    <table className="table table-hover p-2 bordered">
      <thead className="text-uppercase fw-medium">
        <tr className="table-active">
          <th className="text-center">
            <i className="bi bi-ui-checks-grid"></i>
          </th>
          <th scope="col">
            Name <i className="bi bi-chevron-down ms-1"></i>
          </th>
          <th scope="col">Created by</th>
          <th scope="col">Created at</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody className="text-body-secondary">
        <tr>
          <td>
            {" "}
            <input className="form-check-input" type="checkbox" value="" />
          </td>
          <td>
            {" "}
            <i className="bi bi-text-left"></i> &nbsp; New Knowledge base
          </td>
          <td>Sree</td>
          <td>06/11/2023</td>
          <td>
            <DotsDropdown />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <input className="form-check-input" type="checkbox" value="" />
          </td>

          <td>
            {" "}
            <i className="bi bi-text-left"></i> &nbsp; Domestic Animal
          </td>
          <td>Sree</td>
          <td>06/11/2023</td>
          <td>
            <DotsDropdown />{" "}
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <input className="form-check-input" type="checkbox" value="" />
          </td>

          <td>
            {" "}
            <i className="bi bi-text-left"></i> &nbsp; Programming(dynamically
            typed)
          </td>
          <td>Sree</td>
          <td>06/11/2023</td>
          <td>
            <DotsDropdown />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <input className="form-check-input" type="checkbox" value="" />
          </td>
          <td>
            {" "}
            <i className="bi bi-text-left"></i> &nbsp; IMAX Sound
          </td>
          <td>Sree</td>
          <td>06/11/2023</td>
          <td>
            <DotsDropdown />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default EntriesTable;
