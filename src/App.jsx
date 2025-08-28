// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { Suspense, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivateRoute from "@/Routes/PrivateRoutes";

// Lazy-loaded auth page
import Login from '@/pages/login.jsx';

// Public pages
import LandingPage from "@/pages/LandingPage";
import QuoteNavbar from "@/pages/QuoteNavbar";
import BlogLanding from "@/pages/BlogLanding";
import BlogDetail from "@/pages/BlogDetail";
import ContactPage from "@/pages/ContactUs";
import QuoteAdminPanel from "@/pages/QuoteAdminPanel";
import NotFound from "@/pages/NotFound";

// Dashboard layout and pages
import MainLayout from "@/components/Layout/MainLayout";
import Members from "@/pages/Members";
import Blogs from "@/pages/Blogs";
import AdminDashboard from "@/pages/AdminDashboard";
import Projects from "@/pages/Projects";
import FutureProjects from "./pages/FutureProjects.jsx";
import AdvertisementCampaigns from "@/pages/AdvertisementCampaigns";
import ContactMessages from "@/pages/ContactMessages";
// import AboutCompany from "@/pages/AboutCompany.jsx";

// Lazy-loaded services
import WebDevelopmentServices  from './pages/webdevelopmentservices';
import MobileDevelopmentServices from './pages/MobileDevelopmentServices.jsx';
import DevOpsService from '@/pages/DevopService.jsx';
import DigitalMarketingServices from './pages/DigitalMarketingServices.jsx';
import GraphicsDesignServices     from './pages/GraphicsDesignServices.jsx';
import MachineLearning            from './pages/MachineLearning';
import DeepLearningService from './pages/DeepLearningService.jsx';
import NLPService                 from './pages/NlpService';
import CustomSoftwareServices from './pages/CustomSoftwareServices.jsx';
import CloudService               from './pages/CloudService';
import ViewAllServices from './pages/ViewAllServices.jsx';
// Scroll to top on route change

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // smooth scrolling for better UX
    });
  }, [pathname]);
  return null;
}

// App content component
function AppContent() {
  const location = useLocation();

  const isAuthPage = location.pathname === "/login";

  const isDashboardRoute = [
    "/admindashboard",
    "/projects",
    "/future-projects",
    "/ads",
    "/members",
    "/admin/blogs",
    "/quoteadminpanel",
    "/contactmessage",
  ].some((path) => location.pathname.startsWith(path));

  const showDefaultLayout = !isAuthPage && !isDashboardRoute;

  return (
        <>
      <>
      {showDefaultLayout && <Navbar />}

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Routes>
          {/* Protected Dashboard Routes */}
          <Route element={<PrivateRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/members" element={<Members />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/future-projects" element={<FutureProjects />} />
              <Route path="/ads" element={<AdvertisementCampaigns />} />
              <Route path="/admin/blogs" element={<Blogs />} />
              <Route path="/contactmessage" element={<ContactMessages />} />
              <Route path="/quoteadminpanel" element={<QuoteAdminPanel />} />
            </Route>
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<BlogLanding />} />
          <Route path="/blogs/:title" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-quote" element={<QuoteNavbar />} />
          <Route path="/login" element={<Login />} />
           {/* <Route path="/aboutus" element={<AboutCompany />} />  */}

          {/* Services */}
          <Route path="/webdevelopment" element={<WebDevelopmentServices />} />
          <Route path="/mobiledevelopment" element={<MobileDevelopmentServices />} />
          <Route path="/digitalmarketing" element={<DigitalMarketingServices />} />
          <Route path="/devops" element={<DevOpsService/>} />
          <Route path="/graphicsdesign" element={<GraphicsDesignServices />} />
          <Route path="/customsoft" element={<CustomSoftwareServices />} />
          <Route path="/cloudservice" element={<CloudService />} />
          <Route path="/machinelearningservice" element={<MachineLearning />} />
          <Route path="/deeplearningservice" element={<DeepLearningService />} />
          <Route path="/nlpservice" element={<NLPService />} />
          <Route path="/services" element={<ViewAllServices />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {showDefaultLayout && <Footer />}

      {showDefaultLayout && (
        <a
          href="https://wa.me/923350757780"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-9 right-6 sm:bottom-26 sm:right-14 z-50"
        >
          <div className="relative">
           
            {/* WhatsApp Icon */}
            <img
              src="/svgs/whatsapp.svg"
              alt="WhatsApp"
              className="relative w-8 h-8 sm:w-16 sm:h-12 hover:scale-110"
            />
          </div>
        </a>
      )}
   
    <ScrollToTop />
    </>
</>
)};
export default AppContent;
