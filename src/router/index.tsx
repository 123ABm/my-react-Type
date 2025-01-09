import Login from "@/page/Login";
import Role from "@/page/Role";
import Play from "@/page/play";
import Souye from "@/page/souye";
import { createBrowserRouter } from "react-router-dom";
import Tshisanbai from "@/page/tshisanbai";
import Wordtree from "@/page/wordtree";
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
    path: "/play",
    element: <Play />,
  },
  {
    path: "/Souye",
    element: <Souye />,
  },
  {
    path: "/tshisanbai",
    element: <Tshisanbai />,
  },
  {
    path: "/wordtree",
    element: <Wordtree />,
  }
]);
export default router;
