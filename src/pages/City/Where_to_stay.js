import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import Where_to_stay_RB from "../../components/Shared/Modals/Where_to_stay_RB";

export const Where_to_stay = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Where to Stay"}
          title1={"City"}
          title2={"Where to Stay"}
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
                    data-bs-target="#place_to_stay_modal"
                  >
                    Add Where to Stay
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
                        <th>Hotel Name</th>
                        <th>Contact No</th>
                        <th>Email</th>
                        <th>Room Type</th>
                        <th>Area</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Acion</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Sayaji</td>
                        <td>9878987867</td>
                        <td>sayaji@indore.com</td>
                        <td>Delux</td>
                        <td>Vijay nagar</td>
                        <td>Indore</td>
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
        <Where_to_stay_RB />
      </div>
    </>
  );
};
