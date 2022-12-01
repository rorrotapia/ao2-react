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
  let arrayBonus = civ.civilization_bonus.split(';');
  return (
    <Container>
        <BlockContainer>
          <BlockTopImg src={`/civs/menu_techtree_${civ.name.toLowerCase()}.png`} alt=""/>
          <TitleUnit>{civ.name}</TitleUnit>
          <DescriptionUnit>{civ.army_type}</DescriptionUnit>
          <List>
            <h6>Bonus</h6>
            {arrayBonus.map((value) => {
              return <li>{value}</li>
            })}
          </List>
        </BlockContainer>
    </Container>
  );
}

const List = styled.ul`
  text-align: left;
  h6 {
    margin: 0;
    font-size: 1rem;
    text-transform: uppercase;
  }
  li {
    margin: 0;
  }
`;

const DescriptionUnit = styled.p`
  color: white;
`;

const TitleUnit = styled.h1`
  font-family: "Book Antiqua";
  font-size: 1.5rem;
  background: -webkit-linear-gradient(rgb(255, 151, 0), rgb(255, 189, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const BlockTopImg = styled.img`
  width: 150px;
`;

const Container = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
`;

const BlockContainer = styled.div`
  height: 60vh;
  padding: 1rem;
  width: 100%;
  margin: auto;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  border: 1px solid #BD884E;
`;

export  default Civilization