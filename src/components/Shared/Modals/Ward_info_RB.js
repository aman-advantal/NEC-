import React, { useState } from "react";

const Ward_info_RB = () => {
  const [date, setDate] = useState();

  console.log("Date", date);

  return (
    <>
      <div
        id="wardinfo_of_city_modal"
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
                Add Ward Information
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
                  <label htmlFor="example-multiselect" className="form-label">
                    Types in ward
                  </label>
                  <select
                    id="example-multiselect"
                    multiple=""
                    className="form-control"
                  >
                    <option>Community Centers</option>
                    <option>Grounds</option>
                    <option>Parks</option>
                    <option>Schools</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Info Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="festivaltitle"
                    required
                    placeholder="Info name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Info Contact Person
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="festivaltitle"
                    required
                    placeholder="contact"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Info Contact Number
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="festivaltitle"
                    required
                    placeholder="contact"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Ward Number
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="festivaltitle"
                    required
                    placeholder="contact"
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

export default Ward_info_RB;
