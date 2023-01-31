import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import React from "react";
import Community_RB from "../../components/Shared/Modals/Community_RB";
import { Link } from "react-router-dom";
import { ROUTES } from "../../route/constant";

export const Community = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Community Service"}
          title1={"Community Service"}
          title2={"Community service"}
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
                    data-bs-target="#community_of_city_modal"
                  >
                    Add Community Service
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
                        <th>Type</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Date</th>
                        <th>Address</th>
                        {/* <th>Description</th> */}
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Event</td>
                        <td>Mega Trade fair</td>
                        <td>732532526</td>
                        <td>20/01/23</td>
                        <td>Abhay prashal Sports club</td>
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
                        {/* <td>Construction of EWS house(PMAY).</td> */}
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
                          <Link to={ROUTES.VOLUNTEER_DETAIL} className="action-icon">
                            <i className=" mdi mdi-account-group" />
                          </Link>
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
        <Community_RB />
      </div>
    </>
  );
};
