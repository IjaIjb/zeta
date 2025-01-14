import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home/Home"));
const AboutPage = lazy(() => import("../pages/about/About"));
const ResearchPage = lazy(() => import("../pages/research/Research"));
const ServicePage = lazy(() => import("../pages/services/Services"));
const CareersPage = lazy(() => import("../pages/careers/Careers"));
const PartnersPage = lazy(() => import("../pages/partner/Partner"));
const CollaboratorsPage = lazy(() => import("../pages/collaborators/Collaborators"));
const ContactusPage = lazy(() => import("../pages/contact/Contact"));
const MarketPlacePage = lazy(() => import("../pages/marketplace/MarketPlace"));

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
      path: "/solutions",
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
      path: "/partnership",
      component: PartnersPage,
    },
    {
      path: "/contact-us",
      component: ContactusPage,
    },
    {
      path: "/market-place",
      component: MarketPlacePage,
    },
  
  
    
  ];
  
  export default routes;