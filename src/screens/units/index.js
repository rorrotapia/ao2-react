import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom";
import Card from "../../components/card";
import axios from "axios";
import unitsJson from '../../data/units.json'

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

    if (!post) return `No post! ${post}`

    return (
      <>
        { post.map((unit,index) => {
          return (
            <div key={index}>
              <p>
                <a href={`units/${index}`}>
                  {unit.name}
                </a>
              </p>
            </div>
          );
        })}
      </>
    );
}

export  default Units