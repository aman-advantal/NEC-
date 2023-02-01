import { Link } from "react-router-dom";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import { Hospital_RB } from "../../components/Shared/Modals/Hospital_RB";
import { ROUTES } from "../../route/constant";

export const Health_Service = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Health Services"}
          title1={"Health Services"}
          title2={"Hospitals"}
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
                    data-bs-target="#Hospital_modal"
                  >
                    Add Hospital
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
                        <th>Hospital Name</th>
                        <th>Type</th>
                        <th>Contact Number</th>
                        <th>Description</th>

                        <th>Status</th>

                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Apollo</td>
                        <td>Private</td>
                        <td>8898789867 </td>
                        <td>Best Private Hospital </td>
                        {/* <td>
                          {" "}
                          <a href="#" className="action-icon">
                            <i
                              className=" mdi mdi-file-pdf-box "
                              style={{ fontSize: "20px" }}
                            />
                          </a>
                        </td> */}

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
                          <Link href="#" className="action-icon" to={ROUTES.AMBULANCE_LIST}>
                            <i className=" mdi mdi-ambulance" />
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
        {/* <Tender_RB />    */}
        <Hospital_RB />
      </div>
    </>
  );
};
