import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Blog from "../pages/blog";

import Contact from "../pages/contact";
import BlogDetails from "../pages/blogDetails";
import EventDetails from "../pages/eventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/articles",
    element: <Blog />,
  },
  {
    path: "/article/:id",
    element: <BlogDetails />,
  },
  {
    path: "/event/:id",
    element: <EventDetails />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
