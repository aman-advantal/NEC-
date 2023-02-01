import React, { useState } from "react";
import Jodit from "../Include/jodit";
import Multi_image from "../Include/Multi_image";
export const Hospital_RB = () => {
  return (
    <>
      <div
        id="Hospital_modal"
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
                Add Hospital
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
                    placeholder=" Hospital  Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="example-select" className="form-label">
                    Type
                  </label>
                  <select className="form-select" id="example-select">
                    <option>Select</option>
                    <option>Private</option>
                    <option>Government</option>
                  </select>
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
                    placeholder="Contact Number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="example-textarea"
                    rows={5}
                    style={{ height: 55 }}
                    defaultValue={""}
                    placeholder="Address"
                  />
                </div>
                <div className="row">
                  <div className="col-12 mb-3">
                    <Multi_image title="Attachment" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="example-textarea" className="form-label">
                      Description
                    </label>
                    <Jodit />
                  </div>
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
