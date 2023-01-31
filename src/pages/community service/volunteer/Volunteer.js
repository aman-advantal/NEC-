import { Link } from "react-router-dom";
import { CustomHeader } from "../../../components/Shared/common/CustomHeader";

export const Volunteer = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Volunteer Details"}
          title1={"Community Service"}
          title2={"Volunteer Details"}
        />
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
                        <th>Contact Number</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Attachment</th>
                        <th> Volunteer Status</th>
                        {/* <th>Description</th> */}
                        {/* <th>Status</th>
                        <th>Action</th> */}
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>aman</td>
                        <td>7999865647</td>
                        <td>Vijay nagar sch 84</td>
                        <td>20/01/23</td>
                        <td>
                          {" "}
                          <a href="#" className="action-icon">
                            <i
                              className=" mdi mdi-file-pdf-box "
                              style={{ fontSize: "20px" }}
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
                              data-on-label="active"
                              data-off-label="Inactive"
                              className="mb-0 d-block"
                              style={{ width: "70px" }}
                            />
                          </div>
                        </td>
                        {/* <td>Construction of EWS house(PMAY).</td> */}
                        {/* <td>
                          <a href="#" className="action-icon">
                            <i className="mdi mdi-pencil" />
                          </a>
                          <a href="#" className="action-icon">
                            <i className="mdi mdi-delete" />
                          </a>
                          <a href="#" className="action-icon">
                            <i className="uil uil-eye" />
                          </a>
                         
                        </td> */}
                      </tr>
                      <tr>
                        <td>Sawan</td>
                        <td>7999865647</td>
                        <td>tulsi nagar sch 84</td>
                        <td>20/01/23</td>
                        <td>
                          {" "}
                          <a href="#" className="action-icon">
                            <i
                              className=" mdi mdi-file-pdf-box "
                              style={{ fontSize: "20px" }}
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
                              data-on-label="active"
                              data-off-label="Inactive"
                              className="mb-0 d-block"
                              style={{ width: "70px" }}
                            />
                          </div>
                        </td>
                        {/* <td>
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
                        </td> */}
                        {/* <td>Construction of EWS house(PMAY).</td> */}
                        {/* <td>
                          <a href="#" className="action-icon">
                            <i className="mdi mdi-pencil" />
                          </a>
                          <a href="#" className="action-icon">
                            <i className="mdi mdi-delete" />
                          </a>
                          <a href="#" className="action-icon">
                            <i className="uil uil-eye" />
                          </a>
                         
                        </td> */}
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
      </div>
    </>
  );
};