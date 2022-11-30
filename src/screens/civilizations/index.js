import React from "react"
import {Route, useNavigate} from "react-router-dom";

const Civilizations = () => {
    const navigate = useNavigate();

    return (
      <>
          <h1>Civilizations</h1>
        <button onClick={() => navigate('/')}>Home</button>
      </>
    );
}

export  default Civilizations