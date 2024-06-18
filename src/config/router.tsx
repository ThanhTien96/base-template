import { PAGE_PATH } from "constants/page-path";
import { NotFoundPage } from "pages";
import React from "react";
import { Outlet, RouteObject } from "react-router-dom";
import { MainTemplate } from "template";

const Home = React.lazy(() =>  import("pages/home-page"))
const extendedRoutes: RouteObject[] = [
    {
        index: true,
        path: PAGE_PATH.home,
        element: <Home />
    }
    // additional field implement here
];

const routes: RouteObject[] = [
    {
        path: PAGE_PATH.default,
        element: (<MainTemplate>
            <Outlet />
        </MainTemplate>),
        children: [
            ...extendedRoutes,
            {
                path: PAGE_PATH.error,
                element: <NotFoundPage />
            }
        ]
    },
    // {
    //     path: PAGE_PATH.login,
    //     element: <Login />,
    //   },
];


export default routes;



