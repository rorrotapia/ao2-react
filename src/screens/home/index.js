import React from "react"
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Home = () => {
    const navigate = useNavigate();

    return (
      <MainHome>

      </MainHome>
    );
}

const MainHome = styled.div`
    background-image: url(${"background.jpg"});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
`;

const TitleH1 = styled.h1`
  margin: 0;
`;

export  default Home