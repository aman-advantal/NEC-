import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import React from "react";
import { Rec_RB } from "../../components/Shared/Modals/Rec_RB";

export const Recruitments = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Recruitments"}
          title1={"Nec"}
          title2={"Recruitments"}
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
                    data-bs-target="#rec_of_city_modal"
                  >
                    Add Recruitment
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
                        <th>S.No</th>
                        <th>Job Title</th>
                        <th>Department</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Publish Date</th>
                        <th>Last Date</th>
                        {/* <th>Description</th> */}
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Software developer</td>
                        <td>CRM</td>
                        <td>Azad Nagar </td>
                        <td>hr123@gmail.com</td>
                        <td>18/03/2010</td>
                        <td>18/04/2010</td>
                        {/* <td>Construction of EWS house</td> */}
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
                              data-on-label="Active"
                              data-off-label="In-active"
                              className="mb-0 d-block"
                              style={{ width: "70px" }}
                            />
                          </div>
                        </td>
                        <td>
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

                      <tr>
                        <td>2</td>
                        <td>Automation Tester</td>
                        <td>Testing</td>
                        <td>Tulsi Nagar Bhopal </td>
                        <td>hr123@gmail.com</td>
                        <td>18/03/2010</td>
                        <td>18/04/2010</td>
                        {/* <td>Construction of EWS houses</td> */}
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
                              data-on-label="Active"
                              data-off-label="In-active"
                              className="mb-0 d-block"
                              style={{ width: "70px" }}
                            />
                          </div>
                        </td>
                        <td>
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
                </div>{" "}
                {/* end row*/}
              </div>{" "}
            </div>
            {/* end card*/}
          </div>{" "}
          {/* end col*/}
        </div>
        <Rec_RB />
      </div>
    </>
  );
};
