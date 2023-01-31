import { Link } from "react-router-dom";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import { Ground_RB } from "../../components/Shared/Modals/Ground_RB";
import { ROUTES } from "../../route/constant";

export const GroundDetail = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Sport Facility"}
          title1={"Sport Facility"}
          title2={"Ground Details"}
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
                    data-bs-target="#Ground_modal"
                  >
                    Add Ground
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
                        <th> Ground Name</th>
                        <th>Address</th>
                        <th>Sports Available</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Holkar</td>
                        <td>Zanzeer wala Square</td>
                        <td>cricket,football,Hockey</td>

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
                          <Link to={ROUTES.EVENT} className="action-icon">
                            <i className="uil uil-eye" />
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
        <Ground_RB />
      </div>
    </>
  );
};
