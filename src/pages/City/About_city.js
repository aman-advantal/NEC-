import React, { useRef, useMemo, useState, useEffect } from "react";
import JoditEditor from "jodit-react";
import { CustomHeader } from "../../components/Shared/common/CustomHeader";
import Multi_image from "../../components/Shared/Include/Multi_image";

const About_city = () => {
  const [TempratureData, setTempratureData] = useState([
    {
      txt_season: "",
      txt_month: "",
      txt_temprature: "",
    },
  ]);
  const editor = useRef(null);
  const [AddOne, setAddOne] = useState(false);
  const [content, setContent] = useState("");

  const config = {
    autofocus: true,
    cursorAfterAutofocus: "end",
    uploader: {
      insertImageAsBase64URI: true,
    },
  };

  useEffect(() => {
    console.log(TempratureData);
  }, [TempratureData]);

  const addTempratureData = () => {
    let tempInput = {
      txt_season: "",
      txt_month: "",
      txt_temprature: "",
    };
    TempratureData.push(tempInput);

    let netData = TempratureData.map((e, i) => {
      return e;
    });
    console.log(TempratureData);
    setTempratureData(netData);
  };

  const removeTemp = (e) => {
    var data = parseInt(e.target.attributes["data"].value);
    console.log(data);
    let nData = [];
    TempratureData.map((e, i) => {
      if (i !== data) {
        nData.push(e);
      }
    });

    console.log(nData);
    setTempratureData(nData);
  };
  return (
    <div>
      <CustomHeader
        title={"About City"}
        title1={"City"}
        title2={"City Details"}
      />
      <div className="row ">
        <div className="col-lg-12">
          <div className="card p-2">
            {TempratureData &&
              TempratureData.map((ele, index) => {
                return (
                  <div className="row" key={index}>
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

                    <div className="mb-3 col-3">
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
                    <div className="mb-3 col-1 d-flex align-items-end">
                      {index === 0 && (
                        <>
                          <button
                            type="button"
                            onClick={addTempratureData}
                            className="btn btn-primary"
                            style={{ border: "none" }}
                          >
                            <i className="uil-plus-square"></i>
                          </button>
                        </>
                      )}

                      {index !== 0 && (
                        <>
                          <button
                            className="btn btn-danger"
                            style={{ border: "none" }}
                            type="button"
                            onClick={removeTemp}
                            data={index}
                          >
                            <i className="uil-minus-square"></i>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
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
