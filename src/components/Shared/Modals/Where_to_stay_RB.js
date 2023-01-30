import React from "react";
import Jodit from "../Include/jodit";
import Multi_image from "../Include/Multi_image";

const Where_to_stay_RB = () => {
  return (
    <>
      <div
        id="place_to_stay_modal"
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
                Add Where to stay
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
                      Hotel Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="username"
                      required
                      placeholder="Hotel Name"
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
                    </select>
                  </div>
                </div>

                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="example-multiselect" className="form-label">
                      Facilities
                    </label>
                    <select
                      id="example-multiselect"
                      multiple=""
                      className="form-control"
                    >
                      <option>Wi-Fi</option>
                      <option>Breakfast</option>
                      <option>Drink</option>
                      <option>Tv</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    {/* <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small> */}
                  </div>
                </div>

                <div className="col-4">
                  <div className="row">
                    <div>
                      <label htmlFor="password" className="form-label">
                        Types of Rooms
                      </label>
                    </div>
                    <div className="col-3">
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckcolor1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckcolor1"
                        >
                          Deluxe
                        </label>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckcolor1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckcolor1"
                        >
                          Standard
                        </label>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckcolor1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckcolor1"
                        >
                          Premium
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="mb-3">
                    <label for="example-textarea" class="form-label">
                      Resturant Available
                    </label>
                    <div className="mt-2">
                      <div className="form-check form-check-inline">
                        <input
                          type="radio"
                          id="customRadio3"
                          name="customRadio1"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customRadio3"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          type="radio"
                          id="customRadio4"
                          name="customRadio1"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customRadio4"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Contact No.
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
                <div className="mb-3 col-4">
                  <label htmlFor="example-select" className="form-label">
                    Area Select
                  </label>
                  <select className="form-select" id="example-select">
                    <option>Select</option>
                    <option>Vijay Nagar</option>
                    <option>MR10</option>
                  </select>
                </div>

                <div className="mb-3 col-4">
                  <label htmlFor="password" className="form-label">
                    Location
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    required
                    placeholder="Location"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-4 mb-3">
                  <label htmlFor="example-textarea" className="form-label">
                    Hotel Address
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
                    Hotel Description
                  </label>
                  <Jodit />
                </div>
              </div>

              <div className="row">
                <div className="col-12 mb-3">
                  <Multi_image title="Hotel Images" />
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

export default Where_to_stay_RB;
