import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import { Download_RB } from "../../components/Shared/Modals/Download_RB";
export const Downloads = () => {
  return (
    <>
      {" "}
      <CustomHeader
        title={"Downloads"}
        title1={"Nec"}
        title2={"Downloads"}
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
                  data-bs-target="#Download_modal"
                >
                  Add Download
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
                      <th>Title</th>
                      <th>Description</th>
                      <th>Attachment</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                        <td>1</td>
                      <td>Staff Info</td>
                      <td>Information of All staff member</td>
                      <td>
                        {" "}
                        <a href="#" className="action-icon">
                          <i
                            className=" mdi mdi-file-pdf-box text-primary"
                            style={{ fontSize: "25px" }}
                          />
                        </a>
                        <a href="#" className="action-icon">
                          <i
                            className="  mdi mdi-file-document text-success"
                            style={{ fontSize: "25px" }}
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
        <Download_RB />
      </div>
    </>
  );
};
