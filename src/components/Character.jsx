import React from 'react';

const character = (props) => {
        
        return (
            <div className="Character" onClick={props.clickCharacter.bind(this, props.character)}>
            <img className="Image" src={props.character.image} alt=""/>
            <div>{props.character.name}</div>
            </div>  
       );
        
};

export default character;