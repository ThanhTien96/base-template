import routes from 'config/router';
import { LoadingPage } from 'pages';
import React from 'react'
import { BrowserRouter, Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { MainTemplate } from 'template';

export interface IRouterProps{
    defaultRoute: string;
}

const Routes = ({defaultRoute}: IRouterProps) => {
    const defaultRouteObject: RouteObject = {
        index: true,
        path: "/",
        element:<Navigate to={defaultRoute} />
    }

    const elements = useRoutes([defaultRouteObject, ...routes])
  return (
    <React.Suspense
    fallback={
      <MainTemplate>
        <LoadingPage />
      </MainTemplate>
    }
    >
      {elements}
    </React.Suspense>
  )
}

const Router = (props: IRouterProps) => {
  return(
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  )
}

export default Router