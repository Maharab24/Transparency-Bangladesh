import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllFeatures from "../pages/AllFeatures";
import ReportingTool from "../pages/ReportingTool";
import HeatMap from "../pages/HeatMap";
import GovtSpending from "../pages/GovtSpending";
import EducationHub from "../pages/EducationHub";
import Reward from "../pages/Reward";
import CaseTrack from "../pages/CaseTrack";
import Form from "../pages/Form";
import DetailedReport from "../components/govtSpending/DetailedReport";
import AboutUs from "../components/home/AboutUs";
import LoginPage from "../components/login/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/reporting",
        element: <ReportingTool></ReportingTool>
      },
      {
        path: "/heatmap",
        element: <HeatMap></HeatMap>
      },
      {
        path: "/spending",
        element: <GovtSpending></GovtSpending>
      },
      {
        path: "/education",
        element: <EducationHub></EducationHub>
      },
      {
        path: "/reward",
        element: <Reward></Reward>
      },
      {
        path: "/case",
        element: <CaseTrack></CaseTrack>,
      },
      {
        path: "/form",
        element: <Form></Form>,
      },
      {
        path: "/DetailedReport",
        element: <DetailedReport></DetailedReport>,
      },
      {
        path: "/AboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/LoginPage",
        element: <LoginPage></LoginPage>,
      },


    ]
  },
]);