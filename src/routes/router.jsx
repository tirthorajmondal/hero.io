import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyInstallations from "../pages/MyInstallations/MyInstallations"; 

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />
            },
            {
                path: "/apps",
                element: <Apps />,
            },
            {
                path: "/apps/:id",
                element: <AppDetails />,
            },
            {
                path: "/installations",
                element: <MyInstallations />
            }
        ]
    }
])

export default router;