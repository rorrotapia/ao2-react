import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import unitsJson from '../../data/units.json'
import Card from "../../components/card";
import {motion} from 'framer-motion'
import styled from "styled-components";

const Units = () => {
    const [post, setPost] = useState(unitsJson);
    const navigate = useNavigate();
    
    /*useEffect(() => {
      axios.get('https://cors-rorrotapia.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/units')
        .then((response) => {
          console.log(response.name)
          setPost(response.data.units)
        }).catch((response) => {
        console.log(response)
      })
    }, [])*/


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

    if (!post) return `No post! ${post}`

    return (
      <Container variants={container} initial={"hidden"} animate={"show"}>
      { post.map((unit,index) => {
          let random_img = Math.floor(Math.random() * (58 - 1 + 1)) + 1;

          return (
            <motion.div variants={item} key={index}>
                <Card
                  src={`/units/unit (${random_img}).png`}
                  link={`/units/${index}`}
                  index={index}
                  title={unit.name}/>
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

export  default Units