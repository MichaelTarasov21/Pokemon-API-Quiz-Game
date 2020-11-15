import { DomSelectors } from "./DomSelectors.js";
import {
  generation1Array,
  generation2Array,
  generation3Array,
  generation4Array,
  generation5Array,
  generation6Array,
  generation7Array,
  generation8Array,
} from "./generations.js";
import "regenerator-runtime/runtime";
let pokedexnumber = Math.floor(Math.random() * 893 + 1);
let queryurl = `https://pokeapi.co/api/v2/pokemon/${pokedexnumber}`;

async function searchPokemon() {
  const response = await fetch(queryurl, ["GET"]);
  const pokemon = await response.json();
  console.log(pokemon.id);
  return pokemon;
}

searchPokemon();

DomSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<form class="selection"> 
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
 <label class = "statement"> Pick a number from 5-893 which will be the amount of Pokémon that will be given to you!</label>
 <br>
 <br>
 <input type="text" placeholder="Enter a number"> 
 <br>
 <br>
 <input type="submit" class="submitting" id="submit" value="Start The Game">  
</form>`
);

const submit = DomSelectors.container
  .querySelector(".selection")
  .querySelector(".submitting");

submit.addEventListener("click", function (e) {
  e.preventDefault();
});

// add an event listener that will record the checked generations
// new html that will record the amount of questions they want to do based on the generations they picked from 1 - 893
// add an event listener to record those questions
// begin the quiz
// display quiz
// show if they got it right
// if not then no
// if yes then yes
// at the end, tell them they got it right
// also make sure that the pokemon doesnt get repeated
