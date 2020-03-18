import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import CharacterInfo from "./CharacterInfo";

const sideBar = (props)=>{
    return(
        <div className="SideBar">
            <div>
                <SearchBar searchBarHandler = {props.searchBarHandler}></SearchBar>
                <Filter clickFilter = {props.clickFilter} ></Filter>
                <CharacterInfo character ={props.character}></CharacterInfo>
            </div>
        </div>
    );
}
export default sideBar;

