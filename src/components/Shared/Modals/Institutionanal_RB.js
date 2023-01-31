import React from "react";
import Jodit from "../Include/jodit";

const Edu_RB = () => {
  return (
    <>
      <div
        id="edu_of_city_modal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-full-width">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ background: "rgb(0, 43, 98)", color: "#fff" }}
            >
              <h4 className="modal-title" id="fullWidthModalLabel">
                Add Educational Institution
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Institution Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="username"
                      required
                      placeholder="Institution Name"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="example-select" className="form-label">
                      Rating
                    </label>
                    <select className="form-select" id="example-select">
                      <option>Select</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="example-multiselect" className="form-label">
                      Type
                    </label>
                    <select
                      id="example-multiselect"
                      multiple=""
                      className="form-control"
                    >
                      <option>Government</option>
                      <option>Private</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Contact Number
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      id="username"
                      required
                      placeholder=" Contact No."
                    />
                  </div>
                </div>
                <div className="col-4">
                  <label htmlFor="example-textarea" className="form-label">
                    Institution Address
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
              </div>

              <div className="row">
                <div className="col-12 mb-3">
                  <label htmlFor="example-textarea" className="form-label">
                    List of program & courses
                  </label>
                  <Jodit />
                </div>
              </div>
              <div className="row">
                <div className="col-12 mb-3">
                  <label htmlFor="example-textarea" className="form-label">
                    About
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
                style={{ background: "rgb(0, 43, 98)", border: "none" }}
              >
                Save
              </button>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
};

export default Edu_RB;
