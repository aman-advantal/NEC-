import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import Enforcement_Reporting_Comment_RB from "../../components/Shared/Modals/Enforcement_Reporting_Comment_RB";

export const Enforcement_Reporting = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Enforcement Reporting"}
          title1={"NEC"}
          title2={"Enforcement Reporting"}
        />
        <div className="row ">
          <div className="col-lg-12">
            <div className="card p-2">
              <div className="row g-0 align-items-center">
                <div style={{ display: "flex", justifyContent: "end" }}></div>
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
                        <th>Complain No.</th>

                        <th>Type</th>
                        <th> Name</th>
                        <th>Contact No.</th>
                        <th>Enter Details</th>
                        <th>Attachment</th>
                        <td>Status</td>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>6790</td>

                        <td>Enforcement</td>
                        <td>Piyu</td>
                        <td>9989768364</td>
                        <th>Description</th>
                        <td>
                          {" "}
                          <a href="#" className="action-icon">
                            <i
                              className="uil-image text-primary"
                              style={{ fontSize: "25px" }}
                            />
                          </a>
                        </td>

                        <td>
                          {" "}
                          <div className="badge bg-success p-1">
                            <span>Pending</span>
                          </div>
                        </td>

                        <td>
                          {" "}
                          <a href="#" className="action-icon">
                            <i
                              className=" mdi mdi-comment"
                              style={{ fontSize: "20px" }}
                              data-bs-toggle="modal"
                              data-bs-target="#Enforcement_Reporting_Comment_modal"
                            />
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
        <Enforcement_Reporting_Comment_RB />
      </div>
    </>
  );
};
