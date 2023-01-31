import Multi_image from "../Include/Multi_image";

export const Ground_EVENT = () => {
  return (
    <>
      <div
        id="Ground_Event_modal"
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
                Add Events
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
                  <label htmlFor="example-textarea" className="form-label">
                    Description
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
                  <label htmlFor="username" className="form-label">
                     Date
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="date"
                    required
                    // onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                
                <div className="mb-3">
                  <Multi_image title=" Event Image (Optional)" />
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
