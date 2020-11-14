import { DomSelectors } from "./DomSelectors.js";
import "regenerator-runtime/runtime";
DomSelectors.container.innerHTML = "<h1>JS Connected</h1>";
import {
    DomSelectors
} from "./DomSelectors.js";
import 'regenerator-runtime/runtime'
let pokedexnumber = Math.floor(Math.random() * 893 + 1);
let queryurl = `https://pokeapi.co/api/v2/pokemon/${pokedexnumber}`;

async function searchthepokemon() {
  const response = await fetch(queryurl, ["GET"]);
  const pokemon = await response.json();
  return pokemon;
}

DomSelectors.container.insertAdjacentHTML('beforeend', `<form class="selection"> 
 <label class ="statement">Choose the generations you would like to do!</label> 
 <br> <input id="check" type ="checkbox"> 
 <label class ="choice">Generation 1</label>
 <br> <input id="check" type ="checkbox"> 
 <label class ="choice">Generation 2</label> 
 <br> <input id="check" type ="checkbox"> 
 <label class ="choice">Generation 3</label> 
 <br> <input id="check" type ="checkbox"> 
 <label class ="choice">Generation 4</label> 
 <br> <input id="check" type ="checkbox"> 
 <label class ="choice">Generation 5</label> 
 <br> <input id="check" type ="checkbox"> 
 <label class ="choice">Generation 6</label> 
 <br> <input id="check" type ="checkbox"> 
 <label class ="choice">Generation 7</label> 
 <br> <input id="check" type ="checkbox"> 
 <label class ="choice">Generation 8</label>
 <br>
 <br> 
 <input type="submit"> 
 <label class = "statement"> Pick a number from 5-893 which will be the amount of Pokémon that will be given to you!</label>
 <br>
 <br>
 <input type="text" placeholder="Enter a number"> 
 <br>
 <br> 
</form>`)
