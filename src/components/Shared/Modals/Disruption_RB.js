import React, { useState } from "react";
import Jodit from "../Include/jodit";

export const Disruption_RB = () => {
  const [date, setDate] = useState();

  console.log("Date", date);

  return (
    <>
      <div
        id="Disruption_modal"
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
                Add Disruption
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
                {/* <div className="col-4"> */}
                <div className="mb-3">
                  <label htmlFor="example-select" className="form-label">
                    Category
                  </label>
                  <select className="form-select" id="example-select">
                    <option>Traffic</option>
                    <option>Drainage </option>
                    <option>Road</option>
                    <option>Bridge</option>
                    <option>Water Supply</option>
                  </select>
                  {/* </div> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="festivaltitle"
                    required
                    placeholder="Title"
                  />
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Date
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="date"
                    required
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div> */}
                <div className="mb-3">
                  <label for="example-textarea" class="form-label">
                    Description
                  </label>
                  <Jodit />
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
        </div>
      </div>
    </>
  );
};
