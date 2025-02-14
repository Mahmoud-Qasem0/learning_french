import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MasterLayout from "./components/MasterLayout/MasterLayout";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Courses from "./components/Courses/Courses";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import OpenCourse from "./components/OpenCourse/OpenCourse";
import LecturePage from "./components/LecturePage/LecturePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "our-courses", element: <Courses /> },
      { path: "open-course", element: <OpenCourse /> },
      { path: "lecture-page", element: <LecturePage /> },
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <ContactUs /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
