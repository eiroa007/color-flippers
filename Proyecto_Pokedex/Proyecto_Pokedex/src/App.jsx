import './App.css';
import { useState } from 'react';
import axios from "axios";

const App = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState ({
    name: "",
number: "",
species: "",
image: "",
hp: "",
attack: "",
defense: "",
speed: "",
type: "",
  });

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then ((res) => {
      setPokemonName({
        name: pokemonName,
        number: res.data.id,
        species: res.data.species.name,
        Image: res.data.sprites.fron_default,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        speed: res.data.stats[5].base_stat,
        type: res.data.types[0].type.name,

      });
      setPokemonChosen(true);
      
    }
    );

  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokedex</h1>
        <input 
        type="text"
        onChange={(event) => {
          setPokemonName(event.target.value);
        }} 
        />
        <button onClick={searchPokemon}>Search Pokemon</button>
        </div>      
    <div className="DisplaySection">
      {!pokemonChosen ? (
        <h1> Please choose a Pokemon </h1>
      ) : (
        <h1>{pokemon.name}</h1>
      )}
    </div>

    </div>
  );
};

export default App;
