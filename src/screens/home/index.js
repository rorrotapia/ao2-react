import React from "react"
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Home = () => {
    const navigate = useNavigate();

    return (
      <Main>
        <ImgLogo src={"/aoe_logo.png"} alt=""/>
        <TitleH1>Rodrigo ;D</TitleH1>
      </Main>
    );
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    align-items: center;
`;

const ImgLogo = styled.img`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  height: 250px;
`;


const TitleH1 = styled.h1`
  color: white;
`;

export  default Home