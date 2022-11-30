import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom";
import Card from "../../components/card";

const Buildorder = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>{seconds}</p>
    </>
  );
}

export  default Buildorder