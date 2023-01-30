import React, { useState } from "react";
import Jodit from "../Include/jodit";
import Multi_image from "../Include/Multi_image";

const Art_craft_RB = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    // console.log(selectedFiles);
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  return (
    <>
      <div
        id="Art_of_city_modal"
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
                Add Art & Craft
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
                    id="arttitle"
                    required
                    placeholder="Art and Craft Title"
                  />
                </div>
                <div className="mb-3">
                  <Multi_image title=" Images" />
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
                <div className="mb-3">
                  <label htmlFor="example-select" className="form-label">
                    Location
                  </label>
                  <select className="form-select" id="example-select">
                    <option>Select</option>
                    <option>Veena Nagar</option>
                    <option>Vijay nagar</option>
                  </select>
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

export default Art_craft_RB;
