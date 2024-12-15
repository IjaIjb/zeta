import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home/Home"));
const AboutPage = lazy(() => import("../pages/about/About"));
const ResearchPage = lazy(() => import("../pages/research/Research"));
const ServicePage = lazy(() => import("../pages/services/Services"));
const CareersPage = lazy(() => import("../pages/careers/Careers"));
const CollaboratorsPage = lazy(() => import("../pages/collaborators/Collaborators"));
const ContactusPage = lazy(() => import("../pages/contact/Contact"));

const routes = [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/home",
      component: HomePage,
    },
    {
      path: "/about-us",
      component: AboutPage,
    },
    {
      path: "/research",
      component: ResearchPage,
    },
    {
      path: "/services",
      component: ServicePage,
    },
    {
      path: "/careers",
      component: CareersPage,
    },
    {
      path: "/collaborators",
      component: CollaboratorsPage,
    },
    {
      path: "/contact-us",
      component: ContactusPage,
    },
  
  
    
  ];
  
  export default routes;