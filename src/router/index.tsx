import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Blog from "../pages/blog";
import Gallery from "../pages/gallery";
import Contact from "../pages/contact";
import BlogDetails from "../pages/blogDetails";

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
    path: "/",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
