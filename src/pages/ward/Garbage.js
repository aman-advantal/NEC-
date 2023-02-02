import { useState } from "react"
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import Garbage_RB from "../../components/Shared/Modals/Garbage_RB";

export const Garbage = () => {

  const [Announcement, setAnnouncement] = useState()
  const handleClickRB = () => {
    setAnnouncement(0)
  }
  const handleClick = () => {
    setAnnouncement(1)
  }


  return (
    <>
      <div>
        <CustomHeader
          title={"Garbage Collection Schedule"}
          title1={"NEC"}
          title2={"Garbage Collection Schedule"}
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
                    data-bs-target="#garbage_modal"
                    onClick={handleClickRB}
                  >
                    Add Garbage Collection Schedule
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
                        <th>Vehicle Timmings</th>
                        <th>Contact Person</th>
                        <th>Contact No.</th>
                        <th>Announcement</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Garbage Collection</td>
                        <td>Bajaj Shreya</td>
                        <td>09 AM - 11 AM</td>
                        <td>Jigyasu Dubey</td>
                        <td>7235346237</td>
                        <td className="table-action">
                          <a href="#" className="action-icon">
                            {" "}
                            <i className="mdi mdi-bullhorn-variant text-primary " style={{ border: "none" }}
                              data-bs-toggle="modal"
                              data-bs-target="#garbage_modal" onClick={handleClick} />
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
                        <td>Garbage Collector</td>
                        <td>Shivansh Upadhyay</td>
                        <td>10 AM - 11 AM</td>
                        <td>Prakar Gehlot</td>
                        <td>8754245678</td>
                        <td className="table-action">
                          <a href="#" className="action-icon">
                            {" "}
                            <i className="mdi mdi-bullhorn-variant text-primary " style={{ border: "none" }}
                              data-bs-toggle="modal"
                              data-bs-target="#garbage_modal" onClick={handleClick} />
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
        <Garbage_RB
          Announcement={Announcement}
        />
      </div>

    </>
  )
}