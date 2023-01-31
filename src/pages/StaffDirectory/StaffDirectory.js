import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";

import { StaffDirectory_RB } from "../../components/Shared/Modals/Staff_Directory_RB";
export const StaffDirectory = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Staff Directory"}
          title1={"Staff Directories"}
          title2={"Staff Directory"}
        />
        <div className="row ">
          <div className="col-lg-12">
            <div className="card p-2">
              <div className="row g-0 align-items-center">
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <button
                    type="button"
                    class="btn btn-primary "
                    style={{ border: "none" }}
                    data-bs-toggle="modal"
                    data-bs-target="#Staff_modal"
                  >
                    Add Staff Directory
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                        <th> Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th> Designation</th>
                        <th>Department</th>
                        <th>Office Address</th>
                        <td>Status</td>
                        <th>Action</th>
                        
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Rohit Jain</td>
                        <td>rohit@123.com</td>
                        <td>9989768364</td>
                        <td>Officer</td>
                        <td>Muncipal</td>
                        <td>Vijay nagar scheme 54</td>
                        <td>
                          {" "}
                          <div>
                            <input
                              type="checkbox"
                              id="switch01"
                              defaultChecked="true"
                              data-switch="success"
                            />
                            <label
                              htmlFor="switch01"
                              data-on-label="active"
                              data-off-label="Inactive"
                              className="mb-0 d-block"
                              style={{ width: "70px" }}
                            />
                          </div>
                        </td>

                        <td className="table-action">
                          <a href="#" className="action-icon">
                            {" "}
                            <i className="mdi mdi-pencil" />
                          </a>
                          <a href="#" className="action-icon">
                            {" "}
                            <i className="mdi mdi-delete" />
                          </a>
                          <a href="#" className="action-icon">
                            <i className="uil uil-eye" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
            </div>
            {/* end card*/}
          </div>{" "}
          {/* end col*/}
        </div>
        <StaffDirectory_RB />
      </div>
    </>
  );
};
