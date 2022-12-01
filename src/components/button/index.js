import React from 'react'
import styled from 'styled-components'

const Button = ({source, children}) => {

  return (
    <BtnContainer href={source}>
      <BtnImg src={`/button_image_${children}.png`} alt=""/>
      <Btn>{children}</Btn>
    </BtnContainer>
  )
}

const BtnContainer = styled.a`
  border: 1px solid #BD884E;
  display: block;
  text-decoration: none;
  filter: brightness(0.8);
  &:hover {
    filter: brightness(1)
  }
`;

const BtnImg = styled.img`
  display: block;
  width: 100%;
`;

const Btn = styled.div`
  width: auto;
  font-family: "Book Antiqua";
  font-size: 1rem;
  color: white;
  padding:.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: radial-gradient(50% 50% at 50% 50%, #7F0B12 0%, #5A0009 100%);
`;

export default Button