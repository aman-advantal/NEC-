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
                        <th>Date</th>
                        <th>Policy Description</th>
                        <th>Attachment</th>
                        <th>Acion</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Indian Agriculture</td>
                        <td>12/09/2021</td>
                        <td>
                          Indian Agriculture :Policy Suggestion first ever since
                          independence.{" "}
                        </td>
                        <td>Link link</td>
                        <td>
                          <a href="#" className="action-icon">
                            <i className="mdi mdi-pencil" />
                          </a>
                          <a href="#" className="action-icon">
                            <i className="mdi mdi-delete" />
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>Indian Agriculture</td>
                        <td>12/09/2021</td>
                        <td>
                          Indian Agriculture :Policy Suggestion The NDA
                          government.{" "}
                        </td>
                        <td>Link link</td>
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
        <Policies_RB />
      </div>
    </>
  );
};
