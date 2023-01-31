import React from "react";
import Jodit from "../Include/jodit";

export const StaffDirectory_RB = () => {
  return (
    <>
      <div
        id="Staff_modal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{
                background: `var(--primaryDark)`,
                color: `var(--white)`,
              }}
            >
              <h4 className="modal-title" id="fullWidthModalLabel">
                Add Staff Directory
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
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="tenderName"
                    required
                    placeholder="  Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="tenderName"
                    required
                    placeholder=" Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Contact Number
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="tenderName"
                    required
                    placeholder=" Contact Number"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Designation
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="tenderName"
                    required
                    placeholder=" Designation"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="example-select" className="form-label">
                    Department
                  </label>
                  <select className="form-select" id="example-select">
                    <option>Select</option>
                    <option>Muncipal</option>
                    <option>Traffic</option>
                    <option>Tender</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="example-textarea" className="form-label">
                    Office Address
                  </label>
                  <textarea
                    className="form-control"
                    id="example-textarea"
                    rows={3}
                    // style={{ height: 55 }}
                    defaultValue={""}
                    placeholder="Office Address"
                  />
                </div>
              </div>
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
