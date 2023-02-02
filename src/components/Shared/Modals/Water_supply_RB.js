import React, { useState } from "react";
import Jodit from "../Include/jodit";

const Water_supply_RB = ({ Announcementg }) => {
  const [date, setDate] = useState();

  console.log("Date", date);

  return (
    <>
      <div
        id="water_power_modal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{
                background: `var(--primaryDark)`,
                color: `var(--white)`,
              }}
            >
              <h4 className="modal-title" id="fullWidthModalLabel">
               {Announcementg === 0 ?" Add Water/Power Supplier" : "Add Announcement"}
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            {Announcementg === 0 &&
              (<><div className="modal-body">
                <div className="row">

                  <div className="mb-3 col-6">
                    <label htmlFor="example-select" className="form-label">
                      Type
                    </label>
                    <select className="form-select" id="example-select">
                      <option>Select</option>
                      <option>Power Supplier</option>
                      <option>Water Supplier</option>

                    </select>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="festivaltitle"
                        required
                        placeholder="Enter name"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col-6">
                    <label htmlFor="title" className="form-label">
                      Contact No.
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="festivaltitle"
                      required
                      placeholder="Enter contact"
                    />
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Contact Person
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="festivaltitle"
                        required
                        placeholder="Contact person"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3">
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
                      Description
                    </label>
                    <Jodit />
                  </div>
                </div>


              </div> </>)}

            {Announcementg === 1 && <>

              <div className="modal-body">
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Title of Announcement
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="title"
                        required
                        placeholder="Enter title"
                      />
                    </div>
                  </div>

                  <div className="col-12 mb-3">
                    <label htmlFor="example-textarea" className="form-label">
                      Details
                    </label>
                    <Jodit />
                  </div>
                </div>
              </div>


            </>
            }
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
          </div >
          {/* /.modal-content */}
        </div >
        {/* /.modal-dialog */}
      </div >
    </>
  );
};

export default Water_supply_RB;
