import React from 'react'
import styled from 'styled-components';



const StyledCard = styled.div`

width: 100%;
padding-top: 10px;
`
const StyledName = styled.div`
font-size:40px;
color: #432f21;
text-align: center;
`
const StyledTop = styled.div`

`
const StyledBottom = styled.div`

`
const StyledWhole = styled.div`
display: flex;
text-align: center;
justify-content: center;
color: black;
font-size: 30px;
`


 const CharacterCard = ({data}) => {
     return (
    <StyledCard className='card'>
        <StyledName>{data.name}</StyledName>
       <StyledWhole>
       <StyledTop>
        <p> Gender: {data.gender}   </p>
        <p> Height: {data.height}</p>
        <p> Mass: {data.mass}</p>
        <p> Birth Year: {data.birth_year}</p>
        </StyledTop>
        <StyledBottom>
        <p> Eye Color: {data.eye_color}</p>
        <p> Hair Color: {data.hair_color}</p>
        <p> Skin Color: {data.skin_color}</p>
        </StyledBottom>
        </StyledWhole>
       
     </StyledCard>
 )}
    
 export default CharacterCard;