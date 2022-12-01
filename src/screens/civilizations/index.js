import React, {useEffect, useState} from "react"
import {Route, useNavigate} from "react-router-dom";
import axios from "axios";
import civsJson from '../../data/civs.json'
import Card from "../../components/card";
import {motion} from 'framer-motion'
import styled from "styled-components";

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

  const container = {
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  }
  const item = {
    hidden: {
      x: -1000,
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut"
      }
    }
  }


  return (
    <Container variants={container} initial={"hidden"} animate={"show"}>
      { civs.map((civ, index) => {
        return (
          <motion.div variants={item} key={index}>
          <Card
            src={`/civs/menu_techtree_${civ.name.toLowerCase()}.png`}
            link={`/civilizations/${index}`}
            index={index}
            title={civ.name}/>
          </motion.div>
        );
      })}
    </Container>
  );
}


const Container = styled(motion.div)`
  overflow-y: scroll;
  height: 100vh;
`;

export  default Civilizations