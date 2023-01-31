import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";

export const Staff = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Staff"}
          title1={"Staff Managemet"}
          title2={"Staff"}
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Rohit Jain</td>
                        <td>rohit@123.com</td>
                        <td>Admin</td>
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

                        {/* <td className="table-action">
                              <a href="#" className="action-icon">
                                
                                <i className="mdi mdi-pencil" />
                              </a>
                              <a href="#" className="action-icon">
                                
                                <i className="mdi mdi-delete" />
                              </a>
                              <a href="#" className="action-icon">
                                <i className="uil uil-eye" />
                              </a>
                            </td> */}
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
