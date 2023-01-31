import { Link } from "react-router-dom";
import { ROUTES } from "../../route/constant";
export const LeftSidebar = () => {
  return (
    <>
      <div className="leftside-menu" style={{ background: `var(--primary)` }}>
        <Link
          to={ROUTES.DASHBOARD}
          className="logo logo-light"
          style={{ background: `var(--white)` }}
        >
          <span className="logo-lg">
            <img
              src="assets/images/nec-logo-2.png"
              alt="logo"
              style={{ objectFit: "contain", width: "100%", height: "70px" }}
            />
          </span>
          <span className="logo-sm">
            <img
              src="assets/images/nec-logo-3.png"
              alt="logo"
              style={{ objectFit: "contain", width: "100%", height: "70px" }}
            />
          </span>
        </Link>

        <a href="" className="logo logo-dark">
          <span className="logo-lg">
            <img
              src="NEC/assets/images/nec-logo.png"
              alt="logo"
              height="50"
              width="200"
            />
          </span>
        </a>

        <div
          className="button-sm-hover"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Show Full Sidebar"
        >
          <i className="ri-checkbox-blank-circle-line align-middle" />
        </div>

        <div className="button-close-fullsidebar">
          <i className="ri-close-fill align-middle" />
        </div>

        <div className="h-100" id="leftside-menu-container" data-simplebar>
          <div className="leftbar-user">
            <a href="">
              <img
                src="assets/images/users/avatar-1.jpg"
                alt="user-image"
                height={42}
                className="rounded-circle shadow-sm"
              />
              <span className="leftbar-user-name mt-2">Aman Gupta</span>
            </a>
          </div>

          <ul className="side-nav">
            <li class="side-nav-item">
              <Link to={ROUTES.DASHBOARD} class="side-nav-link">
                <i class="uil-comments-alt"></i>
                <span> Dashboard </span>
              </Link>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarCity"
                aria-expanded="false"
                aria-controls="sidebarCity"
                className="side-nav-link"
              >
                <i class="uil-envelope"></i>

                <span> City </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarCity">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to={ROUTES.ABOUT_CITY}>About City</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.HOW_TO_REACH}>How to reach</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.FESTIVAL_OF_CITY}>Festival of city</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.WHERE_TO_STAY}>Where to stay</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.WHERE_TO_EAT}>Where to eat</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.ART_CRAFT}>Art & Craft</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.PLACES_TO_VISIT}>Places to visit</Link>
                  </li>

                  <li>
                    <Link to={ROUTES.FACT_AT_GLANCE}>Facts at glance</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.CITY_EVENT}>City event</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.TENDER}>
                <i class="uil-comments-alt"></i>
                <span> Tenders </span>
              </Link>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.STAFF_DIRECTORY}>
                <i class="uil-package"></i>
                <span> Staff Directory</span>
              </Link>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.POLICY}>
                <i class="uil-store"></i>
                <span> GO/Policies</span>
              </Link>
            </li>

            <li class="side-nav-item">
              <Link class="side-nav-link">
                <i class="uil-briefcase"></i>
                <span> Downloads</span>
              </Link>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.RECRUITMENT}>
                <i class="uil-clipboard-alt"></i>
                <span> Recruitments</span>
              </Link>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.COMMUNITY_SERVICE}>
                <i class="uil-folder-plus"></i>
                <span> Community Services</span>
              </Link>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.EDUCATION_INSTITUTION}>
                <i class="uil-copy-alt"></i>
                <span> Educational Institutions</span>
              </Link>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link">
                <i class="uil-globe"></i>
                <span> Sport Facility</span>
              </Link>
            </li>

            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarNews"
                aria-expanded="false"
                aria-controls="sidebarNews"
                className="side-nav-link"
              >
                <i class="uil-box"></i>

                <span> Wards Information </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarNews">
                <ul className="side-nav-second-level">
                  <li>
                    <Link>Muncipal Office Contact</Link>
                  </li>
                  <li>
                    <Link>Water Supply Information</Link>
                  </li>
                  <li>
                    <Link>Power Supply Information</Link>
                  </li>
                  <li>
                    <Link>Garbage Collection Schedule</Link>
                  </li>
                  <li>
                    <Link>List of Schools</Link>
                  </li>
                  <li>
                    <Link>Community Centers</Link>
                  </li>
                  <li>
                    <Link>List of playing Grounds</Link>
                  </li>
                  <li>
                    <Link>Parks</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link">
                <i class="uil-layer-group"></i>
                <span> Health Service</span>
              </Link>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarInfo"
                aria-expanded="false"
                aria-controls="sidebarInfo"
                className="side-nav-link"
              >
                <i class="uil-globe"></i>

                <span> Emergency Services </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarInfo">
                <ul className="side-nav-second-level">
                  <li>
                    <Link>Ambulance</Link>
                  </li>
                  <li>
                    <Link>Fire</Link>
                  </li>
                  <li>
                    <Link>Police</Link>
                  </li>
                  <li>
                    <Link>Traffic</Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li class="side-nav-item">
              <Link class="side-nav-link">
                <i class="uil-chart"></i>
                <span> News & Events</span>
              </Link>
            </li> */}
            <li class="side-nav-item">
              <Link class="side-nav-link">
                <i class="uil-document-layout-center"></i>
                <span> Feedbacks/Input</span>
              </Link>
            </li>
            {/* <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarHelp"
                aria-expanded="false"
                aria-controls="sidebarHelp"
                className="side-nav-link"
              >
                <i class="uil-window"></i>

                <span>Smart Elements </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarHelp">
                <ul className="side-nav-second-level">
                  <li>
                    <Link>City level AQI</Link>
                  </li>
                  <li>
                    <Link>Environment Sensor Reading </Link>
                  </li>
                </ul>
              </div>
            </li> */}
            {/* <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarPublic"
                aria-expanded="false"
                aria-controls="sidebarPublic"
                className="side-nav-link"
              >
                <i class="uil-table"></i>

                <span>Public Services </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarPublic">
                <ul className="side-nav-second-level">
                  <li>
                    <Link>Traffic Challan</Link>
                  </li>
                  <li>
                    <Link>Check & Pay Tax </Link>
                  </li>
                </ul>
              </div>
            </li> */}
            {/* <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarCitizen"
                aria-expanded="false"
                aria-controls="sidebarCitizen"
                className="side-nav-link"
              >
                <i class="uil-location-point"></i>

                <span>Citizen Services </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarCitizen">
                <ul className="side-nav-second-level">
                  <li>
                    <Link>Birth Certificates</Link>
                  </li>
                  <li>
                    <Link>Death Certificates </Link>
                  </li>
                  <li>
                    <Link>Marriage Registrations </Link>
                  </li>
                  <li>
                    <Link>Trade Licenses </Link>
                  </li>
                  <li>
                    <Link>RTI </Link>
                  </li>
                  <li>
                    <Link>Building Plan Permissions </Link>
                  </li>
                </ul>
              </div>
            </li> */}
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarGrievance"
                aria-expanded="false"
                aria-controls="sidebarGrievance"
                className="side-nav-link"
              >
                <i class="mdi mdi-close"></i>
                {/* <span className="badge bg-success float-end">5</span> */}
                <span>Grievance Services </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarGrievance">
                <ul className="side-nav-second-level">
                  <li>
                    <Link>Civic Infrastructure Issue Reporting</Link>
                  </li>
                  <li>
                    <Link>Enforcement reporting </Link>
                  </li>
                  <li>
                    <Link> Sanitation Issue Reporting</Link>
                  </li>
                  <li>
                    <Link>Public Convienance Services Reporting </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarDisruption"
                aria-expanded="false"
                aria-controls="sidebarDisruption"
                className="side-nav-link"
              >
                <i class="uil-table"></i>

                <span>Disruptions </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarDisruption">
                <ul className="side-nav-second-level">
                  <li>
                    <Link>Traffic</Link>
                  </li>
                  <li>
                    <Link>Road </Link>
                  </li>
                  <li>
                    <Link>Bridge Constructions </Link>
                  </li>
                  <li>
                    <Link>Water Supply </Link>
                  </li>
                  <li>
                    <Link>Drainage </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <div className="clearfix" />
        </div>
      </div>
    </>
  );
};
