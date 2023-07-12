import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// use params nos permite acceder a la variable de la url, en este caso el id
const Detail = ()=> {
  // usamos los hooks para obtener el valor del parametro que viene por URL y guardar
  const{ id } = useParams();

  const [character, setCharacter] = useState({});


  useEffect(() => {

    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(response => response.data)
    .then(( data ) => {
       if (data.name) {
          setCharacter(data);
       } else {
         window.alert('No hay personajes con ese ID');
        }
      }).catch(error=>alert("No se encontró el ID!!!"));
      
      return setCharacter({});
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);


  return(
    <div>
      
        <h1>esto es una cagada</h1>
        <h2>{character?.name}</h2>
        <h2>{character?.status}</h2>
        <h2>{character?.species}</h2>
        <h2>{character?.gender}</h2>
        <h2>{character?.origin?.name}</h2>
        <img src={character?.image} alt={character?.name}></img>
        
      
      {/* {
        character ? <h2>{character.name}</h2> : null
      } */}
    </div>
  )
}

export default Detail;

