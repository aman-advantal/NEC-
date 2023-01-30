import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import Festival_of_city_RB from "../../components/Shared/Modals/Festival_of_city_RB";
import React from "react";

export const Festival_of_city = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Festival of City"}
          title1={"City"}
          title2={"Festival of City"}
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
                    data-bs-target="#festival_of_city_modal"
                  >
                    Add Festival of City
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
                        <th>Festival Title</th>
                        <th>Festival Date</th>
                        <th>Festival Description</th>
                        <th>Acion</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Rang Panchami</td>
                        <td>12 March</td>
                        <td>thisb sjncjc chbjdc</td>
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
                    <tbody>
                      <tr>
                        <td>Holi</td>
                        <td>10 April</td>
                        <td>Holi holi holi</td>
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
        <Festival_of_city_RB />
      </div>
    </>
  );
};
