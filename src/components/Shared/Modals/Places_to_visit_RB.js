import React from "react";
import Jodit from "../Include/jodit";
import Multi_image from "../Include/Multi_image";

export const Places_to_visit_RB = () => {
  return (
    <>
      <div
        id="place_to_visit_modal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-full-width">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{
                background: `var(--primaryDark)`,
                color: `var(--white)`,
              }}
            >
              <h4 className="modal-title" id="fullWidthModalLabel">
                Add Places to visit
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
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="username"
                      required
                      placeholder="Place title"
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
                      <option>5</option>
                    </select>
                  </div>
                </div>

                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="example-multiselect" className="form-label">
                      Visiting time
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="username"
                      required
                      placeholder="Timming"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="example-select" className="form-label">
                      Categories
                    </label>
                    <select className="form-select" id="example-select">
                      <option>Select</option>
                      <option>Tourism places</option>
                      <option>Historical places</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 col-4">
                  <label htmlFor="password" className="form-label">
                    Location
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    required
                    Placeholder="Location"
                  />
                </div>

                <div className="col-4 mb-3">
                  <label htmlFor="example-textarea" className="form-label">
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
              </div>

              <div className="row">
                <div className="col-12 mb-3">
                  <label htmlFor="example-textarea" className="form-label">
                    Place Description
                  </label>
                  <Jodit />
                </div>
              </div>

              <div className="row">
                <div className="col-12 mb-3">
                  <Multi_image title="Upload Images" />
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
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
};
