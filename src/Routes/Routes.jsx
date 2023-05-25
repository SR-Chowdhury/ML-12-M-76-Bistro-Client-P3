import { createBrowserRouter, } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/order/:category',
                element: <Order/>
            }
        ],
    },
]);