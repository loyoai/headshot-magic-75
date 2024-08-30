import { HomeIcon, Rocket } from "lucide-react";
import Index from "./pages/Index.jsx";
import GetStarted from "./pages/GetStarted.jsx";

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
];
