import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
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
  let random_img = parseInt(unitId) + 1;

  return (
    <Container>
      <BlockContainer>
        <BlockTop>
          <BlockTopImg src={`/units/unit (${random_img}).png`} alt=""/>
          <ImgAge src={`/age/age-${unit.age}.png`}/>
          <CostDescription>
            {Object.keys(unit.cost).map((key,index) => {
              return (
                <>
                  <img src={`/resources/tribute_${key.toLowerCase()}.png`} alt=""/>
                  <p key={index}>{unit.cost[key]}</p>
                </>
              )
            })}
          </CostDescription>
        </BlockTop>
        <div>
          <TitleUnit>{unit.name}</TitleUnit>
          <p>{unit.description}</p>
        </div>
      </BlockContainer>
    </Container>
  );
}

const ImgAge = styled.img`
  width: 50px;
  height: 50px;
`;

const CostDescription = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  margin: auto;
`;

const BlockContainer = styled.div`
  height: 60vh;
  width: auto;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  border: 1px solid #BD884E;
  color: white;
`;

const TitleUnit = styled.h1`
  font-size: 2rem;
  font-family: "Book Antiqua";

  background: -webkit-linear-gradient(rgba(255,173,51,1), rgba(255,211,68,1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const BlockTopImg = styled.img`
  border-radius: 15px;
`;
const BlockTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
`;

export  default Unit