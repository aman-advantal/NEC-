import { useState } from "react"
import { CustomHeader } from "../../components/Shared/common/CustomHeader"
import Others_RB from "../../components/Shared/Modals/Others_RB"

export const Others = () => {

  const [Announcemento, setAnnouncemento] = useState()
  const handleClickRB = () => {
    setAnnouncemento(0)
  }
  const handleClick = () => {
    setAnnouncemento(1)
  }


  return (
    <>
      <div>
        <CustomHeader
          title={"Others"}
          title1={"NEC"}
          title2={"Others"}
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
                    data-bs-target="#others_modal"
                    onClick={handleClickRB}
                  >
                    Add Others
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
                        <th>Type</th>
                        <th>Name</th>
                        <th>Contact Person</th>
                        <th>Contact No.</th>
                        <th>Announcement</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Schools</td>
                        <td>Bombay International School</td>
                        <td>Upendra Dhar</td>
                        <td>2457765433</td>
                        <td className="table-action">
                          <a href="#" className="action-icon">
                            {" "}
                            <i className="mdi mdi-bullhorn-variant text-primary " style={{ border: "none" }}
                              data-bs-toggle="modal"
                              data-bs-target="#others_modal" onClick={handleClick} />
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
                        <td>Parks</td>
                        <td>Shikha Seher park</td>
                        <td>Sheleindra Khatri</td>
                        <td>2454676533</td>
                        <td className="table-action">
                          <a href="#" className="action-icon">
                            {" "}
                            <i className="mdi mdi-bullhorn-variant text-primary " style={{ border: "none" }}
                              data-bs-toggle="modal"
                              data-bs-target="#others_modal" onClick={handleClick} />
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
        <Others_RB
          Announcemento={Announcemento}
        />
      </div>

    </>
  )
}