import { DomSelectors } from "./DomSelectors.js";
import "regenerator-runtime/runtime";
DomSelectors.container.innerHTML = "<h1>JS Connected</h1>";
let pokedexnumber = Math.floor(Math.random() * 893 + 1);
let queryurl = `https://pokeapi.co/api/v2/pokemon/${pokedexnumber}`;

async function searchthepokemon() {
  const response = await fetch(queryurl, ["GET"]);
  const pokemon = await response.json();
  return pokemon;
}
