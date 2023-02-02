import { CustomHeader } from "../../components/Shared/common/CustomHeader"
import Ward_info_RB from "../../components/Shared/Modals/Ward_info_RB"

export const Ward=()=>{
    return(
        <>
        <div>
        <CustomHeader
          title={"Ward Information"}
          title1={"NEC"}
          title2={"Ward Info"}
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
                    data-bs-target="#wardinfo_of_city_modal"
                  >
                    Add Ward Info
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
                        <th> Types</th>
                        <th>Info Name</th>
                        <th>Info Contact person</th>
                        <th> Info contact No.</th>
                        <th>Ward No.</th>
                        <td>Status</td>
                        <th>Action</th>
                        
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Parks</td>
                        <td>Nehrfu park</td>
                        <td>Jitendtra</td>
                        <td>7235346237</td>
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
        <Ward_info_RB />
      </div>

        </>
    )
}