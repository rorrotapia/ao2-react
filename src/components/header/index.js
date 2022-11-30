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
            speed={10}
            exit={{ y: 500 }}
            animate={{ y: 0 }}
            initial={{ y: 500 }}
            transition={{ duration: 0.5, ease:"easeIn" }}
          >
            <NavBarColumn>
              <NavButton source="/civilizations" label="civilisation"/>
              <NavButton source="/units" label="Units"/>
            </NavBarColumn>
          </NavBar>
     
      </>
    )
}

const MenuHamburger = styled.div`
  border-radius: 50%;
  background: gray;
  display:flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  @media (min-width: 1024px){
    display: none;
  }
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
`;

const NavBar = styled(motion.nav)`
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
    left: 5rem;
    width: 25%;
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

const NavbarOverlay = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  background: gray;
`;


export default Header;