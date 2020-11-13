import { DomSelectors } from "./DomSelectors.js";
DomSelectors.container.innerHTML = "<h1>JS Connected</h1>";
pokedexnumber = Math.floor((Math.random() * 893) + 1);
let queryurl = `https://pokeapi.co/api/v2/${pokedexnumber}`