import React from "react";
import { Content } from "../components/Layout/content";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/Home/home";
import { ROUTES } from "./constant";
import { Login } from "../pages/Auth/Login ";
import { Topbar } from "../components/Layout/Topbar";
import { LeftSidebar } from "../components/Layout/leftSidebar";
import { How_to_reach } from "../pages/City/How_to_reach";
import { Festival_of_city } from "../pages/City/Festival_of_city";
import { Where_to_stay } from "../pages/City/Where_to_stay";
import { Where_to_eat } from "../pages/City/Where_to_eat";
import { Art_craft } from "../pages/City/Art_craft";
import { Places_to_visit } from "../pages/City/Places_to_visit";
import { Facts_at_glance } from "../pages/City/Facts_at_glance";
import { City_event } from "../pages/City/City_event";
import About_city from "../pages/City/About_city";
import { Recruitments } from "../pages/Recruitment/Recruitments";
import { Policies } from "../pages/policy/Policies";
import { Tender } from "../pages/Tender/Tender";
import { StaffDirectory } from "../pages/StaffDirectory/StaffDirectory";
import { Educational_Instituion } from "../pages/Educational-Institution/Educational_Institution";
import { Community } from "../pages/community service/community";
import { Volunteer } from "../pages/community service/volunteer/Volunteer";
import { GroundDetail } from "../pages/Sport Facility/Sport";
import { GroundEvent } from "../pages/Sport Facility/Event-Detail/Ground_Event";
import { Downloads } from "../pages/Download/Download";
import { Staff } from "../pages/Staff_management/Staff";
import { Role } from "../pages/Staff_management/Role";
import { Users_details } from "../pages/Users/Users_details";
import { EmergencyService } from "../pages/Emergency Services/EmergencySwervice";
import { Health_Service } from "../pages/Health Service/Health_Service";
import { Ambulance_List } from "../pages/Health Service/AmbulaneList/AmbulanceList";
import { Feedback } from "../pages/Feedbacks/Feedback";
import { Saniatation_Issue } from "../pages/Saniatation Issue/Saniatation_Issue";
import { Enforcement_Reporting } from "../pages/Enforcement Reporting/Enforcement_Reporting";
import { Public_Convenience } from "../pages/Public Convenience/Public_Convenience";
import { Civic_Infrastructure_Issue_Reporting } from "../pages/Greviance Services/Civic_Infrastructure_Issue_Reporting";
import { Muncipal } from "../pages/ward/Muncipal";
import { Water_supply } from "../pages/ward/Water_supply";
import { Garbage } from "../pages/ward/Garbage";
import { Others } from "../pages/ward/Others";
export const AppRouter = () => {
  const AllRoutes = [
    {
      key: 1,
      path: ROUTES.INDEX,
      component: Login,
    },
    {
      key: 2,
      path: ROUTES.LOGIN,
      component: Login,
    },
    {
      key: 3,
      path: "",
      component: Login,
    },
    {
      key: 4,
      path: ROUTES.DASHBOARD,
      component: Home,
    },
    // START City Routing
    {
      key: 5,
      path: ROUTES.ABOUT_CITY,
      component: About_city,
    },
    {
      key: 6,
      path: ROUTES.HOW_TO_REACH,
      component: How_to_reach,
    },
    {
      key: 7,
      path: ROUTES.FESTIVAL_OF_CITY,
      component: Festival_of_city,
    },
    {
      key: 8,
      path: ROUTES.WHERE_TO_STAY,
      component: Where_to_stay,
    },
    {
      key: 9,
      path: ROUTES.WHERE_TO_EAT,
      component: Where_to_eat,
    },
    {
      key: 10,
      path: ROUTES.ART_CRAFT,
      component: Art_craft,
    },
    {
      key: 11,
      path: ROUTES.PLACES_TO_VISIT,
      component: Places_to_visit,
    },
    {
      key: 12,
      path: ROUTES.FACT_AT_GLANCE,
      component: Facts_at_glance,
    },
    {
      key: 13,
      path: ROUTES.CITY_EVENT,
      component: City_event,
    },
    {
      key: 14,
      path: ROUTES.RECRUITMENT,
      component: Recruitments,
    },
    {
      key: 15,
      path: ROUTES.POLICY,
      component: Policies,
    },
    {
      key: 16,
      path: ROUTES.TENDER,
      component: Tender,
    },
    {
      key: 17,
      path: ROUTES.STAFF_DIRECTORY,
      component: StaffDirectory,
    },
    {
      key: 18,
      path: ROUTES.EDUCATION_INSTITUTION,
      component: Educational_Instituion,
    },
    {
      key: 19,
      path: ROUTES.COMMUNITY_SERVICE,
      component: Community,
    },
    {
      key: 20,
      path: ROUTES.VOLUNTEER_DETAIL,
      component: Volunteer,
    },
    {
      key: 21,
      path: ROUTES.SPORT_FACILITY,
      component: GroundDetail,
    },
    {
      key: 22,
      path: ROUTES.EVENT,
      component: GroundEvent,
    },
    {
      key: 24,
      path: ROUTES.DOWNLOAD,
      component: Downloads,
    },
    {
      key: 25,
      path: ROUTES.ROLE,
      component: Role,
    },
    {
      key: 26,
      path: ROUTES.STAFF,
      component: Staff,
    },
    {
      key: 27,
      path: ROUTES.USERS,
      component: Users_details,
    },
    {
      key: 28,
      path: ROUTES.EMERGENCY_SERVICE,
      component: EmergencyService,
    },
    {
      key: 29,
      path: ROUTES.HEALTH_SERVICE,
      component: Health_Service,
    },
    {
      key: 30,
      path: ROUTES.AMBULANCE_LIST,
      component: Ambulance_List,
    },
    {
      key: 31,
      path: ROUTES.FEEDBACK,
      component: Feedback,
    },
    {
      key: 32,
      path: ROUTES.SANITATION_ISSUE,
      component: Saniatation_Issue,
    },
    {
      key: 33,
      path: ROUTES.ENFORCEMENT_REPORTING,
      component: Enforcement_Reporting,
    },
    {
      key: 35,
      path: ROUTES.PUNLIC_CONVIEMNCE,
      component: Public_Convenience,
    },
    {
      key: 36,
      path: ROUTES.CIVIC_INFRASTACTURE,
      component:Civic_Infrastructure_Issue_Reporting,
    },
    {
      key: 37,
      path: ROUTES.MUNICIPAL_INFO,
      component:Muncipal,
    },
    {
      key: 38,
      path: ROUTES.WATER_SUPPLY,
      component:Water_supply,
    },
    {
      key: 39,
      path: ROUTES.GARBAGE_COLLECTION,
      component:Garbage,
    },
    {
      key: 40,
      path: ROUTES.OTHERS,
      component:Others,
    },
    // END City Routing
  ];
  const loc = useLocation();
  console.log(loc.pathname);
  const PW = process.env.PUBLIC_URL;
  return (
    <>
      {loc.pathname !== `${PW}` &&
        loc.pathname !== `${PW}/` &&
        loc.pathname !== `${PW}/login` && (
          <>
            <Topbar />
            <LeftSidebar />
          </>
        )}
      <Content>
        <Routes basename={loc.pathname}>
          {AllRoutes.map((i, index) => {
            return (
              <Route key={index} element={<i.component />} path={i.path} />
            );
          })}
        </Routes>
      </Content>
    </>
  );
};
