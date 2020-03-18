import React from 'react';
import Character from './Character';
const allCharacters = (props) => {

    return (
        <div className="CharacterMatrix">
            {props.characters.map(character => {
                return (
                    <Character character={character} clickCharacter={props.clickCharacter} clicked={() => {props.clickCharacter(this.character)}} clickBack={props.clickBack} key={character.id}/>
                );
            })}
        </div>
    );
}

export default allCharacters;