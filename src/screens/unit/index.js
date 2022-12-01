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
          <HeadingUnit>
            <BlockTopImg src={`/units/unit (${random_img}).png`} alt=""/>
            <CostDescription>
              <p>Created: {unit.created_in}</p>
              {Object.keys(unit.cost).map((key,index) => {
                return (
                  <div>
                    <img src={`/resources/tribute_${key.toLowerCase()}.png`} alt=""/>
                    <p key={index}>{unit.cost[key]}</p>
                  </div>
                )
              })}
            </CostDescription>
          </HeadingUnit>
        </BlockTop>
        <div>
          <TitleUnit>{unit.name}</TitleUnit>
          <ImgAge src={`/age/age-${unit.age}.png`}/>
          <p>{unit.description}</p>
        </div>
      </BlockContainer>
    </Container>
  );
}

const HeadingUnit = styled.div`
  display: flex;
`;

const ImgAge = styled.img`
  width: 50px;
  height: 50px;
`;

const CostDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  
  div {
    display: flex;
    margin: .5rem .5rem;
    align-items: center;
    img {
      width: 50px;
      height: 35px;
    }
    p {
      margin-left: .5rem;
      font-weight: 600;
    }
  }
`;

const Container = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
`;

const BlockContainer = styled.div`
  height: 60vh;
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
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
  width: 200px;
  height: 200px;
`;
const BlockTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
`;

export  default Unit