import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import React from "react";
import Tender_RB from "../../components/Shared/Modals/Tender_RB";
export const Tender = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Tender of City"}
          title1={"City"}
          title2={"Tender of City"}
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
                    data-bs-target="#Tender_modal"
                  >
                    Add Tender
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
                        <th>Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Last Submission Date</th>
                        <th>Status</th>

                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>NEC</td>
                        <td>Open</td>
                        <td>Tender description </td>
                        <td>12/12/2022 </td>
                        <td>1/1/2023</td>
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
                              data-on-label="Yes"
                              data-off-label="No"
                              className="mb-0 d-block"
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
        <Tender_RB />   
      </div>
    </>
  );
};
