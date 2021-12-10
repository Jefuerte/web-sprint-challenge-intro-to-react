import React from 'react'
import styled from 'styled-components';




 const CharacterCard = ({data}) => {
     return (
    <div className='card'>
       <div>{data.name}</div>
        <p> Gender: {data.gender}</p>
        <p> Height: {data.height}</p>
        <p> Mass: {data.mass}</p>
        <p> Birth Year: {data.birth_year}</p>
        <p> Eye Color: {data.eye_color}</p>
        <p> Hair Color: {data.hair_color}</p>
        <p> Mass: {data.mass}</p>
        <p> Skin Color: {data.skin_color}</p>
     </div>
 )}
    
 export default CharacterCard;