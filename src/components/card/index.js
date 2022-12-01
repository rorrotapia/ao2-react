import React from "react";
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";

const Card = ({src, link, index, title}) => {

  return (
    <CardContainer
      key={index}
      >
      <ImgCiv width={100} height={100} src={src} alt=""/>
      <CardButton href={link}>
        <TitleCard>{title}</TitleCard>
      </CardButton>
    </CardContainer>
  );
}

const TitleCard = styled.h6`
  font-size: .8rem;
  margin: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
`;

const CardContainer = styled(motion.div)`
  color: white;
  background: radial-gradient(50% 50% at 50% 50%, #7F0B12 0%, #5A0009 100%);
  font-family: "Book Antiqua";
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding:.5rem 1rem;
  height: 3rem;
  width: 70%;
  @media (min-width: 1024px){
    width: 50%;
  }
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #BD884E;
  text-decoration: none;
  margin: .5rem auto;
  filter: brightness(0.8);
  &:hover {
    filter: brightness(1)
  }
`;

const ImgCiv = styled.img`
  border: 1px solid #BD884E;
  margin-right: auto;
  width: 2.5rem;
  height: 2.5rem;
`;

const CardButton = styled.a`
  color: white;
  width: 100%;
  margin-right: 2rem;
  display: block;
  text-decoration: none;
`;

export default Card;