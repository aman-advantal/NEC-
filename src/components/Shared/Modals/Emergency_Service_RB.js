export const Emergency_RB = () => {
  return (
    <>
      <div
        id="Emergency_Service_modal"
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
                Add Emergency Service
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
                  <label htmlFor="example-multiselect" className="form-label">
                    Emergency Service
                  </label>
                  <select
                    id="example-multiselect"
                    multiple=""
                    className="form-control"
                  >
                    <option>Fire</option>
                    <option>Ambulance</option>
                    <option>Police</option>
                    <option>Traffic</option>
                  </select>
                </div>
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
