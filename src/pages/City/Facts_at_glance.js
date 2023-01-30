import React, { useState, useRef } from "react";
import { CustomHeader } from "../../components/Shared/CustomHeader";

export const Facts_at_glance = () => {
  return (
    <div>
      <CustomHeader
        title={"Facts at glance"}
        title1={"About Facts at glance"}
        title2={"Add facts at glance"}
      />
      <div className="row ">
        <div className="col-lg-12">
          <div className="card p-2">
            <div className="row">
              <div className="col-4">
                <div className="mb-3">
                  <label htmlFor="season" className="form-label">
                    Postal Code
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="month"
                    required
                    placeholder=" Enter code"
                  />
                </div>
              </div>
              <div className="mb-3 col-4">
                <label htmlFor="example-select" className="form-label">
                  Areas
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="month"
                  required
                  placeholder=" Enter Areas"
                />
              </div>

              <div className="mb-3 col-4">
                <label htmlFor="population" className="form-label">
                  Population
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="population"
                  required
                  placeholder=" Enter Population"
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-4">
                <label htmlFor="population" className="form-label">
                  Religions
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="population"
                  required
                  placeholder=" Enter religions"
                />
              </div>

              <div className="mb-3 col-4">
                <label htmlFor="example-select" className="form-label">
                  Longitude
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="month"
                  required
                  placeholder=" Enter Longitude"
                />
              </div>

              <div className="mb-3 col-4">
                <label htmlFor="population" className="form-label">
                  Latitude
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="population"
                  required
                  placeholder=" Enter Latitude"
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-4">
                <label htmlFor="population" className="form-label">
                  Altitude
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="population"
                  required
                  placeholder=" Enter altitude"
                />
              </div>

              <div className="mb-3 col-4">
                <label htmlFor="example-select" className="form-label">
                  Literacy rate
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="month"
                  required
                  placeholder=" Enter Literacy rate"
                />
              </div>

              <div className="mb-3 col-4">
                <label htmlFor="population" className="form-label">
                  STD Code
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="population"
                  required
                  placeholder=" Enter STD Code"
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-4">
                <label htmlFor="population" className="form-label">
                  Average Rainfall
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="population"
                  required
                  placeholder=" Enter average rainfall"
                />
              </div>

              <div className="mb-3 col-4">
                <label htmlFor="example-select" className="form-label">
                  Villages
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="month"
                  required
                  placeholder=" Enter Villages"
                />
              </div>

              <div className="mb-3 col-4">
                <label htmlFor="population" className="form-label">
                  Languages
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="population"
                  required
                  placeholder=" Enter Languages"
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-4">
                <label htmlFor="population" className="form-label">
                  Different season
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="population"
                  required
                  placeholder=" Enter religions"
                />
              </div>
              <div className="text-end">
                <button
                  type="button"
                  className="btn btn-light me-2"
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
          </div>
        </div>
      </div>
    </div>
  );
};
