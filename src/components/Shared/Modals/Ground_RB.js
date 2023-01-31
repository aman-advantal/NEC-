import Multi_image from "../Include/Multi_image";

export const Ground_RB = () => {
  return (
    <>
      <div
        id="Ground_modal"
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
                Add Ground
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
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="tenderName"
                    required
                    placeholder="  Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="example-multiselect" className="form-label">
                    Sports Available
                  </label>
                  <select
                    id="example-multiselect"
                    multiple=""
                    className="form-control"
                  >
                    <optgroup label="Indoor">
                      <option value="chess">Chess</option>
                      <option value="carrom">Carrom</option>
                    </optgroup>
                    <optgroup label="Outdoor">
                      <option value="Cricket">Cricket</option>
                      <option value="Football">Football</option>
                      <option value="Hockey">Hockey</option>
                    </optgroup>
                  </select>
                </div>

                {/* <select
                    className="select2 form-control select2-multiple"
                    data-toggle="select2"
                    multiple="true"
                    data-placeholder="Choose ..."
                  >
                    <optgroup label="Alaskan/Hawaiian Time Zone">
                      <option value="AK">Alaska</option>
                      <option value="HI">Hawaii</option>
                    </optgroup>
                    <optgroup label="Pacific Time Zone">
                      <option value="CA">California</option>
                      <option value="NV">Nevada</option>
                      <option value="OR">Oregon</option>
                      <option value="WA">Washington</option>
                    </optgroup>
                  </select> */}

                <div className="mb-3">
                  <label htmlFor="example-textarea" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="example-textarea"
                    rows={3}
                    // style={{ height: 55 }}
                    defaultValue={""}
                    placeholder="Office Address"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="example-textarea" className="form-label">
                    Facility Available
                  </label>
                  <textarea
                    className="form-control"
                    id="example-textarea"
                    rows={3}
                    // style={{ height: 55 }}
                    defaultValue={""}
                    placeholder="Facility Available"
                  />
                </div>
                <div className="mb-3">
                  <Multi_image title="Image (Optional)" />
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
