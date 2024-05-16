import { lazy } from "react";

const PublicRoutes = [
  {
    path: "/",
    component: lazy(() => import("../pages/Landing")),
    exact: true,
    // login: true,
  },
  {
    path: "/business",
    component: lazy(() => import("../pages/Business")),
    exact: true,
    login: true,
  },
  {
    path: "/how-it-works",
    component: lazy(() => import("../pages/HowItWorks")),
    exact: true,
    login: true,
  },
  {
    path: "/contact-us",
    component: lazy(() => import("../pages/ContactUs")),
    exact: true,
    login: true,
  },
  {
    path: "/about-us",
    component: lazy(() => import("../pages/AboutUs")),
    exact: true,
    login: true,
  },
  {
    path: "/login",
    component: lazy(() => import("../pages/auth/Login")),
    exact: true,
  },
  {
    path: "/forgot-password",
    component: lazy(() => import("../pages/auth/ForgotPassword")),
    exact: true,
  },
  {
    path: "/verify-code",
    component: lazy(() => import("../pages/auth/VerifyCode")),
    exact: true,
  },
  {
    path: "/reset-password",
    component: lazy(() => import("../pages/auth/ResetPassword")),
    exact: true,
  },
  {
    path: "/privacy-policy",
    component: lazy(() => import("../components/PrivacyPolicy")),
    exact: true,
    login: true,
  },
  {
    path: "/terms-conditions",
    component: lazy(() => import("../components/Terms_&_Conditions")),
    exact: true,
    login: true,
  },
  {
    path: "*",
    component: lazy(() => import("../components/PageNotFound")),
    exact: true,
    login: true,
  },
];

const PrivateRoutes = [
  {
    path: "/gift-card-library",
    component: lazy(() => import("../pages/giftCardLibrary")),
    exact: true,
  },
  {
    path: "/point-history",
    component: lazy(() => import("../pages/pointHistoy")),
    exact: true,
  },
];

export { PublicRoutes, PrivateRoutes };
