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
                <i class="uil-desktop-alt"></i>
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
                <i class="uil-map-pin-alt"></i>

                <span> City </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarCity">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to={ROUTES.ABOUT_CITY}>About City</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.HOW_TO_REACH}>How to Reach</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.FESTIVAL_OF_CITY}>Festival of City</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.WHERE_TO_STAY}>Where to Stay</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.WHERE_TO_EAT}>Where to Eat</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.ART_CRAFT}>Art & Craft</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.PLACES_TO_VISIT}>Places to Visit</Link>
                  </li>

                  <li>
                    <Link to={ROUTES.FACT_AT_GLANCE}>Facts at a Glance</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.CITY_EVENT}>City Event</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarStaff"
                aria-expanded="false"
                aria-controls="sidebarStaff"
                className="side-nav-link"
              >
                <i class="uil-sitemap"></i>

                <span> Staff Management </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarStaff">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to={ROUTES.ROLE}>Role</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.STAFF}>Staff</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.USERS}>
                <i class="uil-user"></i>
                <span> Users </span>
              </Link>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.TENDER}>
                <i class="uil-file-check-alt"></i>
                <span> Tenders </span>
              </Link>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.STAFF_DIRECTORY}>
                <i class="uil-package"></i>
                <span> Personnel-Staff Directory</span>
              </Link>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.POLICY}>
                <i class="uil-invoice"></i>
                <span>GO/Policies</span>
              </Link>
            </li>

            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.DOWNLOAD}>
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
                <i class="uil-copy-alt"></i>
                <span> Community Service</span>
              </Link>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.EDUCATION_INSTITUTION}>
                <i class="uil-book-open"></i>
                <span> Educational Institutions</span>
              </Link>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.SPORT_FACILITY}>
                <i class=" uil-basketball"></i>
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
                <i class="uil-layer-group"></i>

                <span> Wards Information </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarNews">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to={ROUTES.MUNICIPAL_INFO}>Municipal Officer</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.WATER_SUPPLY}>
                      Water/Power Supply <br />
                      Information
                    </Link>
                  </li>

                  <li>
                    <Link to={ROUTES.GARBAGE_COLLECTION}>
                      Garbage Collection Schedule
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.OTHERS}>Others</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.HEALTH_SERVICE}>
                <i
                  class="uil-medical-square-full
"
                ></i>
                <span> Health Services</span>
              </Link>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.EMERGENCY_SERVICE}>
                <i class="uil-bus"></i>
                <span>Emergency Services</span>
              </Link>
            </li>
            {/* <li class="side-nav-item">
              <Link class="side-nav-link">
                <i class="uil-chart"></i>
                <span> News & Events</span>
              </Link>
            </li> */}
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.FEEDBACK}>
                <i class="uil-comments"></i>
                <span> FeedBack/Input</span>
              </Link>
            </li>

            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarGrievance"
                aria-expanded="false"
                aria-controls="sidebarGrievance"
                className="side-nav-link"
              >
                <i class="uil-server-connection"></i>
                <span>Grievance Services </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarGrievance">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to={ROUTES.CIVIC_INFRASTACTURE}>
                      Civic Infrastructure <br />
                      Issue Reporting
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.ENFORCEMENT_REPORTING}>
                      Enforcement reporting{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.SANITATION_ISSUE}>
                      {" "}
                      Sanitation Issue Reporting
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.PUNLIC_CONVIEMNCE}>
                      Public Convienance <br />
                      Services Reporting{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="side-nav-item">
              <Link class="side-nav-link" to={ROUTES.DISRUPTION}>
                <i class="uil-comments"></i>
                <span> Disruption</span>
              </Link>
            </li>
          </ul>

          <div className="clearfix" />
        </div>
      </div>
    </>
  );
};
