import Jodit from "../Include/jodit";

export const Ambulance_RB = () => {
  return (
    <>
      <div
        id="Ambulance_modal"
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
                Add Ambulance
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
                    Contact Person (Optional)
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="tenderName"
                    required
                    placeholder="Contact Person"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Contact Number
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="tenderName"
                    required
                    placeholder="Contact Number"
                  />
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
