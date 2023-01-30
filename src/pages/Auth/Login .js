import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useViewport } from "../../hooks/useViewport";
import { ROUTES } from "../../route/constant";

export const Login = () => {
  const { isMobile } = useViewport();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));

      setLoading(false);
    };

    loadData();
  }, []);
  return (
    <>
      {loading ? (
        <div
          className="d-flex justify-content-center"
          style={{ alignItems: "center", height: "100vh" }}
        >
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-4 col-lg-5">
                <div className="card">
                  {/* Logo */}
                  <div
                    className="card-header py-4 text-center "
                    style={{ background: `var(--primary)` }}
                  >
                    <a href="">
                      <span>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/nec-logo-2.png`}
                          alt="logo"
                          style={{ objectFit: "contain", width: "50%" }}
                        />
                      </span>
                    </a>
                  </div>
                  <div className="card-body p-4">
                    <div className="text-center w-75 m-auto">
                      <h4 className="text-dark-50 text-center pb-0 fw-bold">
                        Sign In
                      </h4>
                    </div>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="emailaddress" className="form-label">
                          Email address
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          id="emailaddress"
                          value="Demo@admin.com"
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <div className="input-group input-group-merge">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            value="1234556"
                            placeholder="Enter your password"
                          />
                          <div
                            className="input-group-text"
                            data-password="false"
                          >
                            <span className="password-eye" />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 mb-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkbox-signin"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-signin"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="mb-3 mb-0 text-center">
                        <Link
                          to={ROUTES.DASHBOARD}
                          className="btn btn-primary"
                          style={{
                            border: "none",
                          }}
                          type="type"
                        >
                          {" "}
                          Log In{" "}
                        </Link>
                      </div>
                    </form>
                  </div>{" "}
                  {/* end card-body */}
                </div>
                {/* end card */}
                <div className="row mt-3"></div>
                {/* end row */}
              </div>{" "}
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
      )}
    </>
  );
};
