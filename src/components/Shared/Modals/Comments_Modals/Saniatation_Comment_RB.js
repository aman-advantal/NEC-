import React, { useState } from "react";


const Saniatation_Comment_RB = () => {
    const [date, setDate] = useState();

    console.log("Date", date);

  return (
    <>
      <div
        id="Comment_modal"
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
                Add Comment
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
              {/* <div className="col-4"> */}
                  <div className="mb-3">
                    <label htmlFor="example-select" className="form-label">
                     Status
                    </label>
                    <select className="form-select" id="example-select">
                      <option>Select</option>
                      <option>Pending </option>
                      <option>In Progress</option>
                      <option>Closed</option>
                      <option>Reopen</option>
                    </select>
                  {/* </div> */}
                </div>



                <div className="mb-3">
              <label for="example-textarea" class="form-label">
                Comment 
              </label>
              <textarea
                class="form-control"
                id="example-textarea"
                rows="5"
                placeholder="Comment"
              ></textarea>
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

export default Saniatation_Comment_RB;
