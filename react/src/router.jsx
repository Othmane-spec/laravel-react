import { Navigate, createBrowserRouter } from "react-router-dom";

import Dashbord from "./views/Dashbord";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Surveys from "./views/Surveys";
import GeustLayout from "./components/GeustLayout";
import DefaultLayout from "./components/DefaultLayout";
import SurveyView from "./views/SurveyView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashbord",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Dashbord />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
      {
        path: "/surveys/create",
        element: <SurveyView />,
      },
    ],
  },
  {
    path: "/",
    element: <GeustLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
