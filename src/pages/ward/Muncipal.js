import Muncipal_RB from "../../components/Shared/Modals/Comments_Modals/Muncipal_RB";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";

export const Muncipal = () => {
  return (
    <>
      <div>
        <CustomHeader
          title={"Municipal Officer"}
          title1={"NEC"}
          title2={"Municipal Officer"}
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
                    data-bs-target="#muncipal_modal"
                  >
                    Add Municipal Officer
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
                        <th>Grade</th>
                        <th>Name</th>
                        <th>Contact No.</th>
                        <th>Ward No.</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Officer</td>
                        <td>Pratap Singh</td>
                        <td>776543456</td>
                        <td>Ward 76</td>
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
                    <tbody>
                      <tr>
                        <td>Commissioner</td>
                        <td>Ms. Pratibha Pal</td>
                        <td>776543456</td>
                        <td>Ward 78</td>
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
        <Muncipal_RB />
      </div>
    </>
  );
};
