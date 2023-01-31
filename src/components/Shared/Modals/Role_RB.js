import React, { useState } from "react";

export const Role_RB = () => {
  const [RoleAccess, setRoleAccess] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked)
  };



  const checkRoleAccess = (e, from) => {
    console.log(e);
    console.log(from);
  };

  const handleRoleType = (e) => {
    console.log(e);
  };

  return (
    // <>
    //   <div>
    //     <CustomHeader title={"Roles"} title1={"Roles"} title2={"Role"} />
    //     <div className="row ">
    //       <div className="col-lg-12">
    //         <div className="card p-2">
    //           <div className="row g-0 align-items-center">
    //

    //               {(moduleAction === 0 || moduleAction === "0") && (
    //                 <div className="">
    //                   <div className="row">
    //                     <div className="col-sm-2 col-2"></div>
    //                     <div className="col-sm-10 col-10">
    //                       <div className="form-check">
    //                         <input
    //                           className="form-check-input"
    //                           type="checkbox"
    //                           checked={
    //                             addAction === 0 || addAction === "0"
    //                               ? true
    //                               : false
    //                           }
    //                           onClick={(e) => {
    //                             checkRoleAccess(e, "ADD");
    //                           }}
    //                         />
    //                         <label className="form-check-label" htmlFor="">
    //                           Add
    //                         </label>
    //                       </div>
    //                     </div>

    //                     <div className="col-sm-2 col-2"></div>
    //                     <div className="col-sm-10 col-10">
    //                       <div className="form-check">
    //                         <input
    //                           className="form-check-input"
    //                           type="checkbox"
    //                           checked={
    //                             viewAction === 0 || viewAction === "0"
    //                               ? true
    //                               : false
    //                           }
    //                           id="View"
    //                           onClick={(e) => {
    //                             checkRoleAccess(e, "VIEW");
    //                           }}
    //                         />
    //                         <label className="form-check-label" htmlFor="View">
    //                           View
    //                         </label>
    //                       </div>
    //                     </div>

    //                     <div className="col-sm-2 col-2"></div>
    //                     <div className="col-sm-10 col-10">
    //                       <div className="form-check">
    //                         <input
    //                           className="form-check-input"
    //                           type="checkbox"
    //                           checked={
    //                             updateAction === 0 || updateAction === "0"
    //                               ? true
    //                               : false
    //                           }
    //                           id="Update"
    //                           onClick={(e) => {
    //                             checkRoleAccess(e, "Update");
    //                           }}
    //                         />
    //                         <label className="form-check-label" htmlFor="Update">
    //                           Update
    //                         </label>
    //                       </div>
    //                     </div>

    //                     <div className="col-sm-2 col-2"></div>
    //                     <div className="col-sm-10 col-10">
    //                       <div className="form-check">
    //                         <input
    //                           className="form-check-input"
    //                           type="checkbox"
    //                           checked={
    //                             deleteAction === 0 || deleteAction === "0"
    //                               ? true
    //                               : false
    //                           }
    //                           id="Delete"
    //                           onClick={(e) => {
    //                             checkRoleAccess(e, "DELETE");
    //                           }}
    //                         />
    //                         <label
    //                           className="form-check-label"
    //                           htmlFor="Delete"
    //                         >
    //                           Delete
    //                         </label>
    //                       </div>
    //                     </div>

    //                     <div className="col-sm-2 col-2"></div>
    //                     <div className="col-sm-10 col-10">
    //                       <div className="form-check">
    //                         <input
    //                           className="form-check-input"
    //                           type="checkbox"
    //                           checked={
    //                             downloadAction === 0 || downloadAction === "0"
    //                               ? true
    //                               : false
    //                           }
    //                           id="Download"
    //                           onClick={(e) => {
    //                             checkRoleAccess(e, "DOWNLOAD");
    //                           }}
    //                         />
    //                         <label
    //                           className="form-check-label"
    //                           htmlFor="Download"
    //                         >
    //                           Download
    //                         </label>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               )}
    //               {/* <hr></hr> */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <div
        id="Role_RB"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{
                background: `var(--primaryDark)`,
                color: `var(--white)`,
              }}
            >
              <h4 className="modal-title" id="fullWidthModalLabel">
                Edit Role
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form action="#">
              <div className="modal-body">
                <div className="col-sm-12 mb-2">
                  <label htmlFor="txt_adduser_roletype">
                    Role Type<span className="text-danger">*</span>
                  </label>

                  <select
                    type="text"
                    id="txt_adduser_roletype"
                    className="form-select"
                    placeholder="Enter Your Role."
                    onChange={(e) => {
                      handleRoleType(e);
                    }}
                    name="txt_adduser_roletype"
                    required
                  >
                    <option value="0">Select Role</option>
                    <option value="1">Manager</option>
                    <option value="3">Accountant</option>
                  </select>
                </div>

                <div className="col-12 mb-3">
                  <label htmlFor="example-textarea" className="form-label">
                    Role Description<span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="example-textarea"
                    rows={5}
                    style={{ height: 55 }}
                    defaultValue={""}
                    Placeholder="Description"
                  />
                </div>

                <div className="col-sm-12">
                  <hr></hr>
                  <label className="form-label">Role Access Setup</label>
                  <table className="table table-bordered table-striped">
                    <thead className="btn-primary text-light">
                      <tr>
                        <th>Module Name</th>
                        <th className="text-center">Add</th>
                        <th className="text-center">View</th>
                        <th className="text-center">Update</th>
                        <th className="text-center">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleOnChange}
                          />
                          City
                        </td>

                        <td className="text-center">
                          <input
                            className="form-check-input  me-1 "
                            type="checkbox"
                            // checked=""
                            disabled={isChecked ? false : true}
                          />
                          Add
                        </td>

                        <td className="text-center">
                          <input
                            className="form-check-input  me-1"
                            type="checkbox"
                            // checked=""
                            disabled={isChecked ? false : true}
                          />
                          View
                        </td>

                        <td className="text-center">
                          <input
                            className="form-check-input  me-1"
                            type="checkbox"
                            disabled={isChecked ? false : true}
                          />
                          Update
                        </td>

                        <td className="text-center">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            disabled={isChecked ? false : true}
                          />
                          Delete
                        </td>

                       
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            
                          />
                          Dashboard
                        </td>

                        <td className="text-center">
                          <input
                            className="form-check-input  me-1 "
                            type="checkbox"
                            // checked=""
                            disabled={isChecked ? false : true}
                          />
                          Add
                        </td>

                        <td className="text-center">
                          <input
                            className="form-check-input  me-1"
                            type="checkbox"
                            // checked=""
                            disabled={isChecked ? false : true}
                          />
                          View
                        </td>

                        <td className="text-center">
                          <input
                            className="form-check-input  me-1"
                            type="checkbox"
                            disabled={isChecked ? false : true}
                          />
                          Update
                        </td>

                        <td className="text-center">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            disabled={isChecked ? false : true}
                          />
                          Delete
                        </td>

                        
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <div className="d-none">
                   <div className="form-check">
                     <input
                      className="form-check-input me-1"
                      type="checkbox"
                      id="Main"
                   
                    />
                    <label className="form-check-label" htmlFor="Main">
                      MAIN
                    </label>
                  </div>
              </div> */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ border: "none" }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
};
