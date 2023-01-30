import React, {useState } from "react";
import Jodit from "../Include/jodit";
import Multi_image from "../Include/Multi_image";

const Festival_of_city_RB = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const [date, setDate] = useState();

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    // console.log(selectedFiles);
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };
  console.log("Date", date);

  return (
  <>
  <div
    id="festival_of_city_modal"
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
                Add Festival of city
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form  action="#">
        <div className="modal-body">
          
          
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Festival Title
              </label>
              <input
                className="form-control"
                type="text"
                id="festivaltitle"
                required
                placeholder="Festival Title"
              />
            </div>
            <div className="mb-3">

            <Multi_image title="Festival Images" />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="images" className="form-label">
                Add Images
                <br />
                <span>Up to 5 Images</span>
              </label>
              <input
                className="form-control"
                type="file"
                name="images"
                required
                id="uploadImg"
                onChange={onSelectFile}
                multiple
                accept="image/png, image/jpeg, image/webp, .mp4"
                //   placeholder="Name"
              />
              <br />
              {selectedImages.length > 0 &&
                (selectedImages.length > 5 ? (
                  <p className="error">
                    You cant upload more than 5 images! <br />
                    <span>
                      Please delete <b> {selectedImages.length - 10} </b> of
                      them{" "}
                    </span>
                  </p>
                ) : (
                  <button
                    className="upload-btn"
                    onClick={() => {
                      console.log("upload images");
                    }}
                  >
                    UPLOAD {selectedImages.length} IMAGE
                    {selectedImages.length === 1 ? "" : "S"}
                  </button>
                ))}
              <div className="images">
                {selectedImages &&
                  selectedImages.map((image, index) => {
                    return (
                      <div key={image} className="image">
                        <img
                          src={image}
                          height={30}
                          alt="uploadimg"
                          style={{ display: "flex", flexDirection: "row" }}
                        />
                        <button
                          className="btn btn-primary"
                          type="submit"
                          style={{
                            background: "rgb(0, 43, 98)",
                            border: "none",
                          }}
                          onClick={() =>
                            setSelectedImages(
                              selectedImages.filter((e) => e !== image)
                            )
                          }
                        >
                          {" "}
                          Delete Image
                        </button>
                        <p>{index + 1}</p>
                        
                      </div>
                    );
                  })}    
              </div>
            </div> */}
            {/* date */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                 Festival Date
              </label>
              <input
                className="form-control"
                type="date"
                id="date"
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* <div className="mb-3">
              <label for="example-textarea" class="form-label">
                Festival Description
              </label>
              <textarea
                class="form-control"
                id="example-textarea"
                rows="5"
                placeholder="Description"
              ></textarea>
            </div> */}
            <div className="row">
                <div className="col-12 mb-3">
                <label htmlFor="example-textarea" className="form-label">
                    Festival Description
                  </label>
                  <Jodit/>
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
          </form>
       
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
</>
);
};

export default Festival_of_city_RB;
