import React, { useState } from "react";
import Jodit from "../Include/jodit";
import Multi_image from "../Include/Multi_image";

const Community_RB = () => {
  const [date, setDate] = useState();

  console.log("Date", date);

  return (
    <>
      <div
        id="community_of_city_modal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ background: "rgb(0, 43, 98)", color: "#fff" }}
            >
              <h4 className="modal-title" id="fullWidthModalLabel">
                Add Community Service
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
                      Community service
                    </label>
                    <select
                      id="example-multiselect"
                      multiple=""
                      className="form-control"
                    >
                      <option>Activities</option>
                      <option>Events</option>
                    </select>
                  </div>
                
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Activity/Events Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="festivaltitle"
                    required
                    placeholder="Activity name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Contact Number
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="festivaltitle"
                    required
                    placeholder="contact"
                  />
                </div>
                {/* <div className="mb-3">
                  <Multi_image title="Event Images" />
                </div> */}

                {/* date */}
                {/* <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Event Date
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
                    Address
                  </label>
                  <textarea
                    class="form-control"
                    id="example-textarea"
                    rows="3"
                    placeholder="address"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="example-textarea" className="form-label">
                      Activity Description
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
            </form>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
};

export default Community_RB;
