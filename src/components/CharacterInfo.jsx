import React from "react";

const characterInfo = (props)=>{
   console.log(props.character);
    if(props.character){
        return (
            <div className="Character" style={{width: "fit-content"}}>
                    <img className="ImageFullScreen" src={props.character.image} alt="characterImage"/>
                    <div>Name: {props.character.name}</div>
                    <div>Status: {props.character.status}</div>
                    <div>Species: {props.character.species}</div>
                    <div>Type: {props.character.type}</div>
                    <div>Gender: {props.character.gender}</div>
                    <div>Origin: {props.character.origin.name}</div>
                    <div>Location: {props.character.location.name}</div>
                </div>
        );
    }else{
        return(
            <div>
                <h1>HOLA</h1>
            </div>
        )
    }
}

export default characterInfo;