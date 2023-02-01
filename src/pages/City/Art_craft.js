import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import Art_craft_RB from "../../components/Shared/Modals/Art_craft_RB";

export const Art_craft = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Art and Craft"}
          title1={"City"}
          title2={" Art and Craft"}
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
                    data-bs-target="#Art_of_city_modal"
                  >
                    Add Art and Craft
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
                  <div
                    id="basic-datatable_wrapper"
                    className="dataTables_wrapper dt-bootstrap5 no-footer"
                  >
                    {/* <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div
                          className="dataTables_length"
                          id="basic-datatable_length"
                        >
                          <label>
                            Show
                            <select
                              name="basic-datatable_length"
                              aria-controls="basic-datatable"
                              className="form-select form-select-sm"
                            >
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>
                            entries
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div
                          id="basic-datatable_filter"
                          className="dataTables_filter"
                        >
                          <label>
                            Search:
                            <input
                              type="search"
                              className="form-control form-control-sm"
                              placeholder=""
                              aria-controls="basic-datatable"
                            ></input>
                          </label>
                        </div>
                      </div>
                    </div> */}

                    <table
                      id="basic-datatable"
                      className="table dt-responsive nowrap w-100 "
                    >
                      <thead>
                        <tr>
                          <th>S.No</th>
                          <th>Title</th>
                          <th>Address</th>
                          <th>Contact</th>
                          <th>Location</th>
                          <th>Description</th>
                          <th>Status</th>
                          <th>Acion</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>La Jarden Art & Craft</td>
                          <td>134-A, near shri hari public</td>
                          <td>087707 67573</td>
                          <td>Veena nagar</td>
                          <td>We are a India's wel..</td>
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
          <Art_craft_RB />
        </div>
      </div>
    </>
  );
};
