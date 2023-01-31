import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import { Where_to_eat_RB } from "../../components/Shared/Modals/Where_to_eat_RB";

export const Where_to_eat = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Where to eat"}
          title1={"City"}
          title2={"Where to eat"}
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
                    data-bs-target="#Where_to_eat_modal"
                  >
                    Add Where to eat
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
                  <table className="table table-striped table-centered mb-0">
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Resturant</th>
                        <th>Category</th>
                        <th>Contact</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="table-user">Chotiwala Restaurant</td>
                        <td>Indian</td>
                        <td>9878989988</td>
                        <td>Veg</td>
                        <td>Geeta bhawan</td>
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
                        <td className="table-action">
                          <a href="#" className="action-icon">
                            {" "}
                            <i className="mdi mdi-pencil" />
                          </a>
                          <a href="#" className="action-icon">
                            {" "}
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
        <Where_to_eat_RB />
      </div>
    </>
  );
};
