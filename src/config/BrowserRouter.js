import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Units from '../screens/units';
import Civilizations from '../screens/civilizations';
import Civilization from '../screens/civilization';
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
    path: "/civilizations/:civId",
    element: <Civilization />
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
      <Background>
        <Header />
        <Container>
          <RouterProvider router={router} />
        </Container>
      </Background>
    </>
  );
};

const Background = styled.div`
    background-image: url(${"/mainmenu_bg.jpg"});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    overflow: hidden;
    height: 100vh;
    width: 100%;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (min-width: 1024px){
    width: 55vw;
    margin-left: auto;
    margin-right: 3vw;
  }
`;

export default BrowserRouter;