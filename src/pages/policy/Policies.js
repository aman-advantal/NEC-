import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import Policies_RB from "../../components/Shared/Modals/Policies_RB";

export const Policies = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Important GOs & Policies"}
          title1={"GOs/Policies"}
          title2={"Important Policies"}
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
                    data-bs-target="#policies_of_city_modal"
                  >
                    Add Policies
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
                        <th>Policy Name</th>
                        {/* <th>Date</th> */}
                        <th>Policy Points</th>
                        <th>Attachment</th>
                        <th>Status</th>
                        <th>Acion</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Indian Agriculture</td>
                        {/* <td>12/09/2021</td> */}
                        <td>Indian Agriculture :Policy</td>
                        <td>
                          {" "}
                          <a href="#" className="action-icon">
                            <i
                              className=" mdi mdi-file-pdf-box "
                              style={{ fontSize: "20px" }}
                            />
                          </a>
                        </td>
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
                        <td>Governance</td>
                        {/* <td>12/09/2021</td> */}
                        <td>
                          Indian Agriculture :Policy 
                        </td>
                        <td>
                          {" "}
                          <a href="#" className="action-icon">
                            <i
                              className=" mdi mdi-file-excel"
                              style={{ fontSize: "20px" }}
                            />
                          </a>
                        </td>
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
        <Policies_RB />
      </div>
    </>
  );
};
