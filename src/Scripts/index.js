import { DomSelectors } from "./DomSelectors.js";
DomSelectors.container.innerHTML = "<h1>JS Connected</h1>";
let pokedexnumber = Math.floor((Math.random() * 893) + 1);
let queryurl = `https://pokeapi.co/api/v2/${pokedexnumber}`;

async function searchthepokemon(){
    return Pokemoninfo = Promise.resolve(queryurl);
}
searchthepokemon.then(console.log(Pokemoninfo));
