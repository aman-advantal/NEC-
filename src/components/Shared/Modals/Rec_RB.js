import React, { useState } from "react";
import Jodit from "../Include/jodit";

export const Rec_RB = () => {
  const [date, setDate] = useState();

  console.log("Date", date);

  return (
    <>
      <div
        id="rec_of_city_modal"
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
                Add Recruitments
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
                    Title
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="gostitle"
                    required
                    placeholder="Job Title"
                  />
                </div>

                <div className=" mb-3">
                  <label htmlFor="example-textarea" className="form-label">
                    Department
                  </label>
                  <textarea
                    className="form-control"
                    id="example-textarea"
                    rows={5}
                    style={{ height: 55 }}
                    defaultValue={""}
                  />
                </div>
                <div className=" mb-3">
                  <label htmlFor="example-textarea" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="example-textarea"
                    rows={5}
                    style={{ height: 55 }}
                    defaultValue={""}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="gostitle"
                    required
                    placeholder="Enter email"
                  />
                </div>

                {/* date */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Publish Date
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="date"
                    required
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                {/* date */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Last Date
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="date"
                    required
                    onChange={(e) => setDate(e.target.value)}
                  />
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
