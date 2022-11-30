import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from 'styled-components';

const ActionBar = () => {

  return (
    <Bar>
      <BarContainer>
        <img src="/strengh.svg" alt=""/>
        <img src="/upgrade.svg" alt=""/>
        <img src="/bonus.svg" alt=""/>
        <img src="/bonusteam.svg" alt=""/>
      </BarContainer>
    </Bar>
  );
}

const BarContainer = styled.div`
  width: 100%;
  padding: 1rem .5rem;
  justify-content: space-around;
  display: flex;
`;

const Bar = styled.div`
  background-color: rgba(0, 0, 0, 0.59);
  height: 70px;
  border-radius: 10px;
  margin: auto auto 1rem auto;
  display: flex;
  width: 90%;
`;

export default ActionBar;