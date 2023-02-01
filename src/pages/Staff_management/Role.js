import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import { Role_RB } from "../../components/Shared/Modals/Role_RB";

export const Role = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Roles"}
          title1={"Staff Managemet"}
          title2={"Roles"}
        />

        <div className="row ">
          <div className="col-lg-12">
            <div className="card p-2">
              <div className="row g-0 align-items-center">
                <div>
                  <table
                    id="basic-datatable"
                    className="table dt-responsive nowrap w-100 "
                  >
                    <thead>
                      <tr>
                        <th>S No.</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Admin</td>
                        <td>user description</td>
                        <td>30-01-2023</td>

                        <td>
                          <div>
                            <input
                              type="checkbox"
                              id="switch01"
                              defaultChecked="true"
                              data-switch="success"
                            />
                            <label
                              htmlFor="switch01"
                              data-on-label="Active"
                              data-off-label="Inactive"
                              className="mb-0 d-block"
                              style={{ width: "70px" }}
                            />
                          </div>
                        </td>

                        <td className="table-action">
                          <a
                            href="#"
                            className="action-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#Role_RB"
                          >
                            <i className="mdi mdi-pencil" />
                          </a>
                          <a href="#" className="action-icon">
                            <i className="mdi mdi-delete" />
                          </a>
                          <a href="#" className="action-icon">
                            <i className="uil uil-eye" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* end row*/}
              </div>
            </div>
            {/* end card*/}
          </div>
          {/* end col*/}
        </div>
        <Role_RB />
      </div>
    </>
  );
};
