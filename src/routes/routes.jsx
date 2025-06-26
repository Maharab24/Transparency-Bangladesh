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
import IDRegistrationForm from "../components/login/IDRegistrationForm ";
import ContactPage from "../components/ContactPage";
import TrainingSession from "../components/education/TrainingSession";
import AntiCorruptionLaws from "../components/education/AntiCorruptionLaws";
import AntiCorruptionEvents from "../components/education/AntiCorruptionEvents";
// Admin imports
import AdminLayout from "../admin/layouts/AdminLaout";

import Dashboard from "../admin/pages/Dashboard";
import ManageUsers from "../admin/pages/ManageUsers";
import ManageAdmins from "../admin/pages/ManageAdmins";

import { useAuth } from "../context/AuthContext";
// Admin Route Protection
const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  return user?.role === 'admin' ? children : <Navigate to="/LoginPage" />;
};

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
      {
        path: "/IDRegistrationForm",
        element: <IDRegistrationForm ></IDRegistrationForm >,
      },
      {
        path: "/ContactPage",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/TrainingSession",
        element: <TrainingSession></TrainingSession>,
      },
      {
        path: "/AntiCorruptionLaws",
        element: <AntiCorruptionLaws></AntiCorruptionLaws>,
      },
      {
        path: "/AntiCorruptionEvents",
        element: <AntiCorruptionEvents></AntiCorruptionEvents>,
      },


    ]
  },

  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "users", element: <ManageUsers /> },
      { path: "admins", element: <ManageAdmins /> },
    ]
  }


]);