import { CustomHeader } from "../../components/Shared/CustomHeader";
import Where_to_stay_RB from "../../components/Shared/Modals/Where_to_stay_RB";

export const Where_to_stay = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Where to stay"}
          title1={"City"}
          title2={"Where to stay"}
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
                    Add Where to stay
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
                        <th>Hotel Name</th>
                        <th>Contact No</th>
                        <th>Email</th>
                        <th>Room Type</th>
                        <th>Area</th>
                        <th>Location</th>
                        <th>Acion</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Sayaji</td>
                        <td>9878987867</td>
                        <td>sayaji@indore.com</td>
                        <td>Delux</td>
                        <td>Vijay nagar</td>
                        <td>Indore</td>
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
        <Where_to_stay_RB />
      </div>
    </>
  );
};
