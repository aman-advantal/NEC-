import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";

export const Users_details = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"User Details"}
          title1={"Users"}
          title2={"User Details"}
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
                        <th>S.No</th>
                        <th> Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Create By</th>
                        <th>Create At</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Rohit Jain</td>
                        <td>rohit@123.com</td>
                        <td>9989768364</td>
                        <td>Admin</td>
                        <td>30-01-2023</td>
                        <td>Manager</td>
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
                          <a href="#" className="action-icon">
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
      </div>
    </>
  );
};
