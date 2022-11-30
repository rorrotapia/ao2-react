import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom";
import Card from "../../components/card";
import axios from "axios";

const Units = () => {
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
      axios.get('https://cors-rorrotapia.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/units')
        .then((response) => {
          console.log(response.name)
          setPost(response.data.units)
        }).catch((response) => {
        console.log(response)
      })
    }, [])

    if (!post) return `No post! ${post}`

    return (
      <>
        { post.map((unit) => {
          return (
            <div>
              <p>
                <a href={`units/${unit.id}`}>
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