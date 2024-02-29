import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Latest from "../pages/Latest";
import TopPicks from "../pages/TopPicks";
import BookDetail from "../pages/BookDetail";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "latest",
        Component: Latest
      },
      {
        path: "top-picks",
        Component: TopPicks
      },
      {
        path: "book-detail",
        Component: BookDetail
      },
      {
        path: "search",
        Component: Search
      },
    ]
  },
  {
    path: "*",
    Component: NotFound
  }
])

export default router