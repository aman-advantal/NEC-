import React from "react";
import Jodit from "../Include/jodit";
import Multi_image from "../Include/Multi_image";

export const City_event_RB = () => {
  return (
    <>
      <div
        id="city_event_modal"
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
                Add City event
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
                      Event Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="username"
                      required
                      Placeholder="Name"
                    />
                  </div>
                </div>

                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="example-date" className="form-label">
                      Event Date
                    </label>
                    <input
                      className="form-control"
                      id="example-date"
                      type="date"
                      name="date"
                    />
                  </div>
                </div>

                <div className="col-4">
                  <div className="mb-3">
                  <label htmlFor="example-select" className="form-label">
                        Event Place
                      </label>
                      <select className="form-select" id="example-select">
                        <option>Select</option>
                        <option>Sayaji club</option>
                        <option>Essentia luxury hotel</option>
                        
                      </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <div className="mb-3">
                    <div className="mb-3">
                      <label htmlFor="example-select" className="form-label">
                        Categories
                      </label>
                      <select className="form-select" id="example-select">
                        <option>Select</option>
                        <option>Religious Event</option>
                        <option>Sport Event</option>
                        <option>Political Event</option>
                        <option>Exhibition</option>
                        <option>Fashion show</option>
                        <option>Concerts</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <div className="mb-3 col-4">
                  <label htmlFor="password" className="form-label">
                    Location
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    required
                    Placeholder="Location"
                  />
                </div> */}

                <div className="col-4 mb-3">
                  <label htmlFor="example-textarea" className="form-label">
                    Event Address
                  </label>
                  <textarea
                    className="form-control"
                    id="example-textarea"
                    rows={5}
                    style={{ height: 55 }}
                    defaultValue={""}
                    Placeholder="Address"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 mb-3">
                  <label htmlFor="example-textarea" className="form-label">
                    Event Description
                  </label>
                  <Jodit />
                </div>
              </div>

              <div className="row">
                <div className="col-12 mb-3">
                  <Multi_image title="Event Images" />
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
                style={{  border: "none" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
