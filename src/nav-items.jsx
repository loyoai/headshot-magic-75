import { HomeIcon, Rocket, FileText } from "lucide-react";
import Index from "./pages/Index.jsx";
import GetStarted from "./pages/GetStarted.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Get Started",
    to: "/get-started",
    icon: <Rocket className="h-4 w-4" />,
    page: <GetStarted />,
  },
  {
    title: "Refund Policy",
    to: "/refund-policy",
    icon: <FileText className="h-4 w-4" />,
    page: <RefundPolicy />,
  },
  {
    title: "Terms of Service",
    to: "/terms-of-service",
    icon: <FileText className="h-4 w-4" />,
    page: <TermsOfService />,
  },
  {
    title: "Privacy Policy",
    to: "/privacy-policy",
    icon: <FileText className="h-4 w-4" />,
    page: <PrivacyPolicy />,
  },
];
