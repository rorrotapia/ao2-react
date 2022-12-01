import React, {useState} from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from "framer-motion";

import NavButton from "../NavButton";

const Header = () => {
    const [displayMenu, setDisplayMenu] = useState(null);

    return (
      <>
        <MenuHamburger onClick={() => setDisplayMenu(!displayMenu)}>
          <Image src={"/hambergermenu.svg"}/>
        </MenuHamburger>
        <NavBar
          style={{display: displayMenu &&  'block' }}
          key={1}
        >
          <NavBarColumn>
            <NavButton source="/" label="Home"/>
            <NavButton source="/civilizations" label="civilization"/>
            <NavButton source="/units" label="units"/>
          </NavBarColumn>
        </NavBar>
      </>
    )
}

const MenuHamburger = styled.div`
  border-radius: 50%;
  z-index: 10;
  background: #947243;
  display: flex;
  width: 50px;
  height: 50px;
  margin: 1rem;
  box-shadow: 0px 0px 15px 2px rgb(0 0 0 / 20%);
  align-items: center;
  justify-content: center;
  position: absolute;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
`;

const NavBar = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1;
  display: none;
  @media (min-width: 1024px){
    display: block;
    left: 3vw;
    width: 35vw;
    max-width: 400px;
    height: 100vh;
    border-left: 1px solid #BD884E;
    border-right: 1px solid #BD884E;
  }
`;

const NavBarColumn = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  @media (min-width: 1024px){   
    height: 100vh;
    justify-content: center;
  }
`;


export default Header;