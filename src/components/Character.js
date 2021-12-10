// Write your Character component here
import CharacterCard from "./CharacterCard"; 
import styled from "styled-components";



export default function Character({stars}) {
    return(
        <>
            {stars.map((data) => (
                <CharacterCard data = {data} key={data.id} />
            ))}
            </>
    )
}