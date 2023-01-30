import React, { useRef, useMemo, useState } from "react";
import JoditEditor from "jodit-react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import Multi_image from "../../components/Shared/Include/Multi_image";

const About_city = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    autofocus: true,
    cursorAfterAutofocus: "end",
    uploader: {
      insertImageAsBase64URI: true,
    },
  };

  return (
    <div>
      <CustomHeader
        title={"About City"}
        title1={"City"}
        title2={"City Events"}
      />
      <div className="row ">
        <div className="col-lg-12">
          <div className="card p-2">
            <div className="row">
              <div className="col-4">
                <div className="mb-3">
                  <label htmlFor="season" className="form-label">
                    Season
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="season"
                    required
                    placeholder=" Enter Season"
                  />
                </div>
              </div>
              <div className="mb-3 col-4">
                <label htmlFor="example-select" className="form-label">
                  Month
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="month"
                  required
                  placeholder=" Enter Month"
                />
              </div>

              <div className="mb-3 col-4">
                <label htmlFor="temp" className="form-label">
                  Temperature
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="temp"
                  required
                  placeholder=" Enter Temperature"
                />
              </div>
            </div>

            <div className="col-12 mb-3">
              <label htmlFor="example-textarea" className="form-label">
                Image Upload
              </label>
              <Multi_image />
            </div>

            <label htmlFor="username" className="form-label">
              City Description
            </label>
            <div className="row g-0 align-items-center mb-3">
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onChange={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
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
  );
};

export default About_city;
