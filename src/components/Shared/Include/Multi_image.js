import React, { useState } from "react";

const Multi_image = ({ title }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  return (
    <>
      <label htmlFor="example-textarea" className="form-label">
        {title}
      </label>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          name="images"
          required
          id="uploadImg"
          onChange={onSelectFile}
          multiple
          accept="image/png, image/jpeg, image/webp"
        />

        {selectedImages.length > 0 &&
          (selectedImages.length > 10 ? (
            <p className="error">
              You cant upload more than 10 images!
              <br />
              <span>
                Please delete <b> {selectedImages.length - 10} </b> of them{" "}
              </span>
            </p>
          ) : (
            // <small id="emailHelp" className="form-text text-muted">
            //   Update {selectedImages.length} images{" "}
            //   {selectedImages.length === 1 ? "" : ""}
            // </small>
            <button
              className="btn btn-primary"
              onClick={() => {
                console.log("upload images");
              }}
              style={{ margin: "20px 0 20px 0" }}
            >
              UPLOAD {selectedImages.length} IMAGE
              {selectedImages.length === 1 ? "" : "S"}
            </button>
          ))}
        <div className="images image_box_list">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={image} className="image image_box">
                  <img
                    src={image}
                    height={30}
                    alt="uploadimg"
                    className="img-fluid avatar-xl"

                    // style={{ display: "flex", flexDirection: "row" }}
                  />
                  <button
                    className="btn btn-primary rounded-circle"
                    type="submit"
                    style={{ border: "none" }}
                    onClick={() =>
                      setSelectedImages(
                        selectedImages.filter((e) => e !== image)
                      )
                    }
                  >
                    <i className="mdi mdi-close-circle "></i>
                  </button>

                  {/* <p>{index + 1}</p> */}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Multi_image;
