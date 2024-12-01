import Login from "@/page/Login";
import Role from "@/page/Role";
import Go from "@/page/go";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/role",
    element: <Role />,
  },
  {
    path: "/go",
    element: <Go />,
  },
]);
export default router;
