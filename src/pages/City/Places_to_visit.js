import React from "react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import { Places_to_visit_RB } from "../../components/Shared/Modals/Places_to_visit_RB";

export const Places_to_visit = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Places to visit"}
          title1={"City"}
          title2={"Places to visit"}
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
                    data-bs-target="#place_to_visit_modal"
                  >
                    Add Places to visit
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
                  {/* Table */}
                  <div className="tab-content">
                    <div
                      className="tab-pane active show"
                      id="multi-item-preview"
                      role="tabpanel"
                    >
                      <div
                        id="selection-datatable_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <div
                              className="dataTables_length"
                              id="selection-datatable_length"
                            >
                              <label className="form-label">
                                Show
                                <select
                                  name="selection-datatable_length"
                                  aria-controls="selection-datatable"
                                  className="form-select form-select-sm"
                                >
                                  <option value={10}>10</option>
                                  <option value={25}>25</option>
                                  <option value={50}>50</option>
                                  <option value={100}>100</option>
                                </select>
                                entries
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div
                              id="selection-datatable_filter"
                              className="dataTables_filter"
                            >
                              <label>
                                Search:
                                <input
                                  type="search"
                                  className="form-control form-control-sm"
                                  placeholder=""
                                  aria-controls="selection-datatable"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <table
                              id="selection-datatable"
                              className="table table-striped dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
                              aria-describedby="selection-datatable_info"
                              style={{ width: 1166 }}
                            >
                              <thead>
                                <tr>
                                  <th>S.No</th>
                                  <th>Place Name</th>
                                  <th>Visiting Time</th>
                                  <th>Categories</th>
                                  <th>Location</th>
                                  <th>Status</th>
                                  <th>Acion</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Rajwada Palace</td>
                                  <td>9:00AM - 8:00PM</td>
                                  <td>Historical place</td>
                                  <td>Rajwada circle</td>
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

                        <div className="row">
                          <div className="col-sm-12 col-md-5">
                            <div
                              className="dataTables_info"
                              id="selection-datatable_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 10 of 57 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="selection-datatable_paginate"
                            >
                              <ul className="pagination pagination-rounded">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="selection-datatable_previous"
                                >
                                  <a
                                    href="#"
                                    aria-controls="selection-datatable"
                                    data-dt-idx={0}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    <i className="mdi mdi-chevron-left" />
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a
                                    href="#"
                                    aria-controls="selection-datatable"
                                    data-dt-idx={1}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    1
                                  </a>
                                </li>
                                <li className="paginate_button page-item ">
                                  <a
                                    href="#"
                                    aria-controls="selection-datatable"
                                    data-dt-idx={2}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    2
                                  </a>
                                </li>
                                <li className="paginate_button page-item ">
                                  <a
                                    href="#"
                                    aria-controls="selection-datatable"
                                    data-dt-idx={3}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    3
                                  </a>
                                </li>
                                <li className="paginate_button page-item ">
                                  <a
                                    href="#"
                                    aria-controls="selection-datatable"
                                    data-dt-idx={4}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    4
                                  </a>
                                </li>
                                <li className="paginate_button page-item ">
                                  <a
                                    href="#"
                                    aria-controls="selection-datatable"
                                    data-dt-idx={5}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    5
                                  </a>
                                </li>
                                <li className="paginate_button page-item ">
                                  <a
                                    href="#"
                                    aria-controls="selection-datatable"
                                    data-dt-idx={6}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    6
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next"
                                  id="selection-datatable_next"
                                >
                                  <a
                                    href="#"
                                    aria-controls="selection-datatable"
                                    data-dt-idx={7}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    <i className="mdi mdi-chevron-right" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <table
                    id="basic-datatable"
                    className="table dt-responsive nowrap w-100 "
                  >
                    <thead>
                      <tr>
                        <th>Place Name</th>
                        <th>Visiting Time</th>
                        <th>Place Type</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Acion</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Rajwada Palace</td>
                        <td>9:00AM - 8:00PM</td>
                        <td>Historical place</td>
                        <td>Rajwada circle</td>
                        <td>
                          <div>
                          <input
                                type="checkbox"
                                id="switch01"
                                defaultChecked=""
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
                          <a
                            href="#"
                            className="action-icon"
                          >
                            <i className="mdi mdi-pencil" />
                          </a>
                          <a
                            href="#"
                            className="action-icon"
                          >
                            <i className="mdi mdi-delete" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                </div>
              </div>
            </div>
            {/* end card*/}
          </div>
          {/* end col*/}
        </div>
        <Places_to_visit_RB />
      </div>
    </>
  );
};
