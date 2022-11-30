import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom";
import Card from "../../components/card";
import axios from "axios";
import ActionBar from "../../components/ActionBar";
import styled from "styled-components";
import unitsJson from '../../data/units.json'

const Unit = () => {
  const { unitId } = useParams()
  const [unit, setUnit] = useState(unitsJson[unitId]);
  
  /*useEffect(() => {
    axios.get(`https://cors-rorrotapia.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/unit/${unitId}`)
      .then((response) => {
        console.log(response)
        setUnit(response.data)
      }).catch((response) => {
        console.log(response)
    })
  }, [])*/

  if (!unit) return `No post! ${unit}`

  return (
    <>
      <BlockTop>
        <div>
          <p>{unit.age}</p>
          {Object.keys(unit.cost).map((key,index) => {
            return (
              <p key={index}>{key}: {unit.cost[key]}</p>
            )
          })}
        </div>
        <BlockTopImg src="/PR1-002.png" alt=""/>
      </BlockTop>
      <div>
        <TitleUnit>{unit.name}</TitleUnit>
        <p>{unit.description}</p>
      </div>
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

export  default Unit