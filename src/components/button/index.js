import React from 'react'
import styled from 'styled-components'

const Button = (props) => {

  return (
    <Btn>{props.children}</Btn>
  )
}

const Btn = styled.button`
  width: 100%;
  font-family: "Book Antiqua";
  font-size: 1rem;
  color: white;
  display: block;
  padding:.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: radial-gradient(50% 50% at 50% 50%, #7F0B12 0%, #5A0009 100%);
  border: 1px solid #BD884E;
`;

export default Button;