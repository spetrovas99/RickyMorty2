import React,{Component} from 'react';
import './App.css';
import axios from "axios";
import AllCharacters from './components/AllCharacters';
import SideBar from './components/SideBar';

class App extends Component {
  state = {
    characters: [],
    selectedCharacter: null,

  };

  componentDidMount(){
    axios.get("https://rickandmortyapi.com/api/character/").then(response =>{
      this.setState({characters: response.data.results})
    });
  }

  clickCharacterHandler = (character) => {
    this.setState({selectedCharacter: character});
  }
  filterHandler = ()=>{
    let characters = this.state.characters.slice();
    let status = parseInt(document.getElementById("select").value);

    if(status === 0){
      characters.map(character => {
        character.appear[0] = true;
        return character;
      });
    } else if (status === 1){
      characters.map(character => {
        if(character.status === "Alive"){
          character.appear[0] = true;
        } else {
          character.appear[0] = false;
        }
        return character;
      });
    } else if (status === 2){
      characters.map(character => {
        if(character.status === "Dead"){
          character.appear[0] = true;
        } else {
          character.appear[0] = false;
        }
        return character;
      });
    }

    this.setState({characters});
  }

  searchBarHandler = () =>{
    let characters = this.state.characters.slice();
    const input = document.getElementById("searchBar").value;

    characters.map(character => {
      if(character.name.toUpperCase().includes(input.toUpperCase())){
        character.appear[0] = true;
      } else {
        character.appear[0] = false;
      }

      return character;
    });

    this.setState({characters});
  }


  render(){
    
    return (
      <div className ="App">
       <AllCharacters characters= {this.state.characters} clickCharacter={this.clickCharacterHandler} ></AllCharacters>
       <SideBar character={this.state.selectedCharacter} characters= {this.state.characters} clickFilter = {this.filterHandler} searchBarHandler = {this.searchBarHandler}></SideBar>
      </div>
    );
  };
}

export default App;
