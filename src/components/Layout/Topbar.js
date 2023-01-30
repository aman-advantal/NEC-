import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../route/constant";
export const Topbar = () => {
  useEffect(() => {
    document.querySelector(".button-toggle-menu").onclick = function () {
      const element = document.querySelector("#show");

      if (element.getAttribute("data-sidenav-size") === "default") {
        element.setAttribute("data-sidenav-size", "condensed");
      } else {
        element.setAttribute("data-sidenav-size", "default");
      }
    };
  }, []);

  return (
    <div>
      <div className="navbar-custom " style={{ background: `var(--primary)` }}>
        <div className="topbar container-fluid">
          <div className="d-flex align-items-center gap-lg-2 gap-1">
            <button className="button-toggle-menu">
              <i className="mdi mdi-menu" />
            </button>

            <button
              className="navbar-toggle"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </button>

            <div className="app-search dropdown d-none d-lg-block">
              <div
                className="dropdown-menu dropdown-menu-animated dropdown-lg"
                id="search-dropdown"
              >
                <div className="dropdown-header noti-title">
                  <h5 className="text-overflow mb-2">
                    Found <span className="text-danger">17</span> results
                  </h5>
                </div>

                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <i className="uil-notes font-16 me-1" />
                  <span>Analytics Report</span>
                </a>

                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <i className="uil-life-ring font-16 me-1" />
                  <span>How can I help you?</span>
                </a>

                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <i className="uil-cog font-16 me-1" />
                  <span>User profile settings</span>
                </a>

                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                </div>
                <div className="notification-list">
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <div className="d-flex">
                      <img
                        className="d-flex me-2 rounded-circle"
                        src="assets/images/users/avatar-2.jpg"
                        alt="Generic placeholder image"
                        height={32}
                      />
                      <div className="w-100">
                        <h5 className="m-0 font-14">Erwin Brown</h5>
                        <span className="font-12 mb-0">UI Designer</span>
                      </div>
                    </div>
                  </a>
                  {/* item*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <div className="d-flex">
                      <img
                        className="d-flex me-2 rounded-circle"
                        src="assets/images/users/avatar-5.jpg"
                        alt="Generic placeholder image"
                        height={32}
                      />
                      <div className="w-100">
                        <h5 className="m-0 font-14">Jacob Deo</h5>
                        <span className="font-12 mb-0">Developer</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ul className="topbar-menu d-flex align-items-center gap-3">
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle arrow-none nav-user px-2"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <span className="account-user-avatar">
                  <img
                    src="assets/images/profile.png"
                    alt="user-image"
                    width={32}
                    className="rounded-circle"
                  />
                </span>
                <span className="d-lg-flex flex-column gap-1 d-none">
                  <h5 className="my-0">K. Modi</h5>
                  <h6 className="my-0 fw-normal">Admin</h6>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome !</h6>
                </div>

                <a href="javascript:void(0);" className="dropdown-item">
                  <i className="mdi mdi-account-circle me-1" />
                  <span>My Account</span>
                </a>

                <Link to={ROUTES.INDEX} className="dropdown-item">
                  <i className="mdi mdi-logout me-1" />
                  <span>Logout</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
