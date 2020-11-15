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
let generationsinplay = [];

async function searchPokemon() {
  const response = await fetch(queryurl, ["GET"]);
  const pokemon = await response.json();
  console.log(pokemon.id);
  return pokemon;
}

searchPokemon();

DomSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class="selection"> 
 <label class ="statement">Choose the generations you would like to do!</label> 
 <br> <input id="check1" type ="checkbox"> 
 <label class ="choice">Generation 1</label>
 <br> <input id="check2" type ="checkbox"> 
 <label class ="choice">Generation 2</label> 
 <br> <input id="check3" type ="checkbox"> 
 <label class ="choice">Generation 3</label> 
 <br> <input id="check4" type ="checkbox"> 
 <label class ="choice">Generation 4</label> 
 <br> <input id="check5" type ="checkbox"> 
 <label class ="choice">Generation 5</label> 
 <br> <input id="check6" type ="checkbox"> 
 <label class ="choice">Generation 6</label> 
 <br> <input id="check7" type ="checkbox"> 
 <label class ="choice">Generation 7</label> 
 <br> <input id="check8" type ="checkbox"> 
 <label class ="choice">Generation 8</label>
 <br>
 <br> 
 <label class = "statement"> Pick a number from 5-893 which will be the amount of Pokémon that will be given to you!</label>
 <br>
 <br>
 <input type="text" placeholder="Enter a number"> 
 <br>
 <br>
 <input type="submit" class="submitting" id="start" value="Start The Game">  
</div>`
);

const start = document.getElementById("start");

start.addEventListener("click", function () {
  generationsinplay = [];
  if (document.getElementById(`check1`).checked) {
    generationsinplay = generationsinplay.concat(generation1Array);
  }
  if (document.getElementById(`check2`).checked) {
    generationsinplay = generationsinplay.concat(generation2Array);
  }
  if (document.getElementById(`check3`).checked) {
    generationsinplay = generationsinplay.concat(generation3Array);
  }
  if (document.getElementById(`check4`).checked) {
    generationsinplay = generationsinplay.concat(generation4Array);
  }
  if (document.getElementById(`check5`).checked) {
    generationsinplay = generationsinplay.concat(generation5Array);
  }
  if (document.getElementById(`check6`).checked) {
    generationsinplay = generationsinplay.concat(generation6Array);
  }
  if (document.getElementById(`check7`).checked) {
    generationsinplay = generationsinplay.concat(generation7Array);
  }
  if (document.getElementById(`check8`).checked) {
    generationsinplay = generationsinplay.concat(generation8Array);
  }
  console.log(generationsinplay);
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
