import { CustomHeader } from "../../components/Shared/common/CustomHeader"
import Water_supply_RB from "../../components/Shared/Modals/Water_supply_RB"
import React,{useState } from "react"

export const Water_supply=()=>{

  const [Announcementg, setAnnouncementg] = useState()
  const handleClickRB = () => {
    setAnnouncementg(0)
  }
  const handleClick = () => {
    setAnnouncementg(1)
  }

    return(
        <>
        <div>
        <CustomHeader
          title={"Water/Power Supply Information"}
          title1={"NEC"}
          title2={"Water/Power Supply Information"}
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
                    data-bs-target="#water_power_modal"
                    onClick={handleClickRB}
                  >
                    Add Water/Power Supplier
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
                        <td>Power Supplier</td>
                        <td>Dhreya Bajaj</td>
                        <td>Jigyasu Dubey</td>
                        <td>7235346237</td>
                        
                        <td className="table-action">
                          <a href="#" className="action-icon">
                            {" "}
                            <i className="mdi mdi-bullhorn-variant text-primary"
                            style={{ border: "none" }}
                            data-bs-toggle="modal"
                            data-bs-target="#water_power_modal" onClick={handleClick}  />
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
                        <td>Water Supplier</td>
                        <td>Sar Enterprises</td>
                        <td>Divyansh Thapa</td>
                        <td>865446237</td>
                        
                        <td className="table-action">
                          <a href="#" className="action-icon">
                            {" "}
                            <i className="mdi mdi-bullhorn-variant text-primary"
                            style={{ border: "none" }}
                            data-bs-toggle="modal"
                            data-bs-target="#water_power_modal" onClick={handleClick}  />
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
        <Water_supply_RB 
        Announcementg={Announcementg}/>
      </div>

        </>
    )
}