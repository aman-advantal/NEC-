import React, { useState } from "react";
import Jodit from "../Include/jodit";
const Tender_RB = () => {
  const [date, setDate] = useState();
  console.log("Date", date);
  return (
    <>
      <div
        id="Tender_modal"
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
                Add Tenders
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
                    Tender Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="tenderName"
                    required
                    placeholder=" Tender Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="example-select" className="form-label">
                   Tender Category
                  </label>
                  <select className="form-select" id="example-select">
                    <option>Select</option>
                    <option>Open Tender</option>
                    <option>Serial Tender</option>
                    <option>Selective Tender</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Tender Date
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="date"
                    required
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Last Date Submission
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
                      Tender Description
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
export default Tender_RB;
