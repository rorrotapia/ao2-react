import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Units from '../screens/units';
import Civilizations from '../screens/civilizations';
import Home from '../screens/home';
import Header from "../components/header";
import Unit from "../screens/unit";
import styled from "styled-components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/civilizations",
    element: <Civilizations />
  },
  {
    path: "/units",
    element: <Units />
  },
  {
    path: "/units/:unitId",
    element: <Unit />
  },
]);


const BrowserRouter = () => {
  return (
    <>
      <Header />
      <Main>
        <RouterProvider router={router} />
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default BrowserRouter;