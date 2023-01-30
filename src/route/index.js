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
