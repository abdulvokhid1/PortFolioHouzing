import Proporties from "../components/Proporties";
import Generic from "../pages/Generic";
import Home from "../pages/Home";
export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <Home />,
    search: "?",
    private: false,
    hidden: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    Element: <Proporties />,
    search: "?",
    private: false,
    hidden: false,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: <Generic />,
    search: "?",
    private: false,
    hidden: false,
  },
];
