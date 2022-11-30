import React from "react"
import Button from "../button";
import styled from 'styled-components'

const NavButton = ({label, source}) => {
  return (
    <NavBarItem>
      <Button onClick={() => source}>{label}</Button>
    </NavBarItem>
  )
}

const NavBarItem = styled.li`
  width: 50%;
  margin: 1rem;
  @media (min-width: 1024px) {
    width: 70%;
  }
`;

export default NavButton