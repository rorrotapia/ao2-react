import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import ActionBar from "../../components/ActionBar";
import styled from "styled-components";

const Civilization = () => {
  const [civ, setCiv] = useState(null);
  const { civId } = useParams()
  useEffect(() => {
    axios.get(`https://cors-rorrotapia.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${civId}`)
      .then((response) => {
        setCiv(response.data)
      }).catch((response) => {
        console.log(response)
    })
  }, [])

  if (!civ) return `No post! ${civ}`

  return (
    <>
      <BlockTop>
        <BlockTopImg src="/PR1-002.png" alt=""/>
        <div>
          <TitleUnit>{civ.name}</TitleUnit>
          <p>{civ.army_type}</p>
        </div>
      </BlockTop>
      <ActionBar/>
    </>
  );
}

const TitleUnit = styled.h1`
  font-size: 2rem;
`;

const BlockTopImg = styled.img`
  border-radius: 15px;
`;
const BlockTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export  default Civilization