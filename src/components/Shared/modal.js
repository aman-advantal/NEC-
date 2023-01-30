export const Modal = () => {
  return (
    <>
      <div>
        <div
          id="signup-modal"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="text-center mt-2 mb-4">
                  <a href="" className="text-success">
                 
                  </a>
                </div>
                <form className="ps-3 pe-3" action="#">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Add Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="username"
                      required
                      placeholder="Title"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Add Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      required
                      id="password"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="example-textarea" class="form-label">
                      Description
                    </label>
                    <textarea
                      class="form-control"
                      id="example-textarea"
                      rows="5"
                      placeholder="Description"
                    ></textarea>
                  </div>

                  <div className="mb-3 text-center">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      style={{ background: "rgb(0, 43, 98)", border: "none" }}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        {/* Login modal */}

        <div
          id="login-modal"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="text-center mt-2 mb-4">
                  <a href="index.html" className="text-success">
                    <span>
                      <img
                        src="assets/images/logo-dark.png"
                        alt=""
                        height={18}
                      />
                    </span>
                  </a>
                </div>
                <form action="#" className="ps-3 pe-3">
                  <div className="mb-3">
                    <label htmlFor="emailaddress1" className="form-label">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="emailaddress1"
                      required
                      placeholder="john@deo.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password1" className="form-label">
                      Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      required
                      id="password1"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="mb-3 text-center">
                    <button
                      className="btn rounded-pill btn-primary"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
      </div>
    </>
  );
};
