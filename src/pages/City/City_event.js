import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import { City_event_RB } from "../../components/Shared/Modals/City_event_RB";

export const City_event = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"City Event"}
          title1={"City"}
          title2={"City Event"}
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
                    data-bs-target="#city_event_modal"
                  >
                    Add City Event
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
                        <th>Event Name</th>
                        <th>Event Date</th>
                        <th>Event Place</th>
                        <th>Categories</th>
                        <th>Status</th>
                        <th>Acion</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Divine Live</td>
                        <td>12-03-2023</td>
                        <td>Essentia luxury hotel</td>
                        <td>Live Concert</td>
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
                </div>
              </div>
            </div>
            {/* end card*/}
          </div>
          {/* end col*/}
        </div>
        <City_event_RB />
      </div>
    </>
  );
};
