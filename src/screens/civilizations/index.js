import React, {useEffect, useState} from "react"
import {Route, useNavigate} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import civsJson from '../../data/civs.json'

const Civilizations = () => {
  const [civs, setCiv] = useState(civsJson);
  const navigate = useNavigate();
  
  /*
  useEffect(() => {
    axios.get('https://cors-rorrotapia.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
    .then((response) => {
      setCiv(response.data.civilizations)
    }).catch((response) => {
      console.log(response)
    })
  }, [])*/
  
  if (!civs) return `No post! ${civs}`
  
  return (
    <>
      { civs.map((civ, index) => {
        return (
          <div key={index}>
            <Card>
              <img width={100} height={100} src={`/civs/menu_techtree_${civ.name.toLowerCase()}.png`} alt=""/>
              <CardButton href={`civilization/${index}`}>
                {civ.name}
              </CardButton>
            </Card>
          </div>
        );
      })}
    </>
  );
}

const Card = styled.div`
  background-color: #282c34;

  margin: 1rem;
  padding: .5rem;
`;

const CardButton = styled.a`
  color: white;
  text-decoration: none;
`;

export  default Civilizations