// import
import React, { Component }  from 'react';
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
// import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import Predictions from 'views/Dashboard/Predictions';
import Pred from 'views/Dashboard/Pred';
import xai from 'views/Dashboard/xai';

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import { InvisionLogo } from 'components/Icons/Icons';
import { HelpIcon } from 'components/Icons/Icons';
import Chart123 from 'variables/chart_new';
import HelpButton from 'components/Sidebar/Helpbutton';

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    // rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/anomalydetect",
    name: "Anomaly Detection",
    // rtlName: "لوحة القيادة",
    icon: <DocumentIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   // rtlName: "لوحة القيادة",
  //   icon: <PersonIcon color='inherit' />,
  //   secondaryNavbar: true,
  //   component: Profile,
  //   layout: "/admin",
  // },
  {
    path: "/signin",
    name: "Sign In",
    // rtlName: "لوحة القيادة",
    icon: <RocketIcon color='inherit' />,
    component: SignIn,
    layout: "/auth",
  },
  // {
  //   path: "/signup",
  //   name: "Sign Up",
  //   // rtlName: "لوحة القيادة", 
  //   icon: <RocketIcon color='inherit' />,
  //   component: SignUp,
  //   layout: "/auth",
  // },
  {
    path: "/pred",
    name: "Predictions",
    // rtlName: "لوحة القيادة", 
    icon: <StatsIcon color='inherit' />,
    component: Pred,
    layout: "/admin",
  },
  {
    path: "/xai",
    name: "XAI",
    // rtlName: "لوحة القيادة", 
    icon: <SupportIcon color='inherit' />,
    component: xai,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Charts",
    // rtlName: "لوحة القيادة",
    icon: <CreditIcon color='inherit' />,
    component: Chart123,
    layout: "/admin",
  },
  // {
  //   path: "/needhelp",
  //   name: "Need Help",
  //   // rtlName: "لوحة القيادة", 
  //   icon: <StatsIcon color='inherit' />,
  //   component: HelpButton,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support-page",
  //   name: "RTL",
  //   // rtlName: "آرتيإل",
  //   icon: <SupportIcon color='inherit' />,
  //   // component: RTLPage,
  //   layout: "/rtl",
  // },
  // {
    // name: "ACCOUNT PAGES",
    // category: "account",
    // rtlName: "صفحات",
    // state: "pageCollapse",
    // views: [
      // {
      //   path: "/profile",
      //   name: "Profile",
      //   // rtlName: "لوحة القيادة",
      //   icon: <PersonIcon color='inherit' />,
      //   secondaryNavbar: true,
      //   component: Profile,
      //   layout: "/admin",
      // },
      // {
      //   path: "/signin",
      //   name: "Sign In",
      //   // rtlName: "لوحة القيادة",
      //   icon: <DocumentIcon color='inherit' />,
      //   component: SignIn,
      //   layout: "/auth",
      // },
      // {
      //   path: "/signup",
      //   name: "Sign Up",
      //   // rtlName: "لوحة القيادة", 
      //   icon: <RocketIcon color='inherit' />,
      //   component: SignUp,
      //   layout: "/auth",
      // },
      // {
      //   path: "/pred",
      //   name: "Predictions",
      //   // rtlName: "لوحة القيادة", 
      //   icon: <RocketIcon color='inherit' />,
      //   component: Predictions,
      //   layout: "/admin",
      // },
      // {
      //   path: "/xai",
      //   name: "XAI",
      //   // rtlName: "لوحة القيادة", 
      //   icon: <RocketIcon color='inherit' />,
      //   component: xai,
      //   layout: "/admin",
      // },
    // ],
  // },
];
export default dashRoutes;
