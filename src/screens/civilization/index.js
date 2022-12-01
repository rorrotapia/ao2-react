import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import civsJson from '../../data/civs.json'

const Civilization = () => {
  const { civId } = useParams()
  const [civ, setCiv] = useState(civsJson[civId]);
  /*useEffect(() => {
    axios.get(`https://cors-rorrotapia.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${civId}`)
      .then((response) => {
        setCiv(response.data)
      }).catch((response) => {
        console.log(response)
    })
  }, [])*/

  if (!civ) return `No post! ${civ}`

  return (
    <Container>
      <BlockTop>
        <BlockBottom>
          <BlockTopImg src={`/civs/menu_techtree_${civ.name.toLowerCase()}.png`} alt=""/>
          <TitleUnit>{civ.name}</TitleUnit>
          <DescriptionUnit>{civ.army_type}</DescriptionUnit>
        </BlockBottom>
      </BlockTop>
    </Container>
  );
}

const DescriptionUnit = styled.p`
  color: white;
`;

const TitleUnit = styled.h1`
  font-family: "Book Antiqua";
  font-size: 1.5rem;
  background: -webkit-linear-gradient(rgba(255,173,51,1), rgba(255,211,68,1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const BlockTopImg = styled.img`
  border-radius: 15px;
  width: 50px;
`;
const BlockTop = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const BlockBottom = styled.div`
  height: 60vh;
  width: auto;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  border: 1px solid #BD884E;
`;

export  default Civilization