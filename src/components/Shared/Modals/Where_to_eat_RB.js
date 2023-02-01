import React from "react";
import Jodit from "../Include/jodit";
import Multi_image from "../Include/Multi_image";

export const Where_to_eat_RB = () => {
  return (
    <>
      <div
        id="Where_to_eat_modal"
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
                Add Where to Eat
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
                      Resturant Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="username"
                      required
                      placeholder="Resturant Name"
                    />
                  </div>
                </div>

                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="example-select" className="form-label">
                      Resturant Category
                    </label>
                    <select className="form-select" id="example-select">
                      <option>Select</option>
                      <option>Itallian</option>
                      <option>Chinese</option>
                      <option>Indian</option>
                    </select>
                  </div>
                </div>

                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Ratings
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
                <div className="col-4">
                  <div className="mb-3">
                    <label for="example-textarea" class="form-label">
                      Resturant Type
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
                          Veg
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
                          Non Veg
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3 col-4">
                  <label htmlFor="example-select" className="form-label">
                    Location
                  </label>
                  <select className="form-select" id="example-select">
                    <option>Select</option>
                    <option>Vijay Nagar</option>
                    <option>MR10</option>
                    <option>Rajendra Nagar</option>
                    <option>Palasia</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col-4">
                  <label htmlFor="password" className="form-label">
                    Website Url
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    required
                    placeholder="url"
                  />
                </div>
                <div className="col-4 mb-3">
                  <label htmlFor="example-textarea" className="form-label">
                    Resturant Address
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
                    Resturant Description
                  </label>
                  <Jodit />
                </div>
              </div>

              <div className="row">
                <div className="col-12 mb-3">
                  <Multi_image title="Resturant Images" />
                </div>
              </div>

              <div className="row">
                <div className="col-12 mb-3">
                  <Multi_image title="Resturant Menu" />
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
