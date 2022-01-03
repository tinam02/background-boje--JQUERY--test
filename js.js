const apiURL = "https://pokeapi.co/api/v2/pokemon/";
let pokeNumber = 10;
let html = ``;
const container = document.getElementById(`container`);
let pokemonEl = document.createElement("div");

function getPokemon(i) {
  let pokeURL = apiURL + i;
  fetch(pokeURL)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      makeCard(data);
    });
}
async function fetchPokemon() {
  for (let i = 1; i < pokeNumber; i++) {
    await getPokemon(i);
  }
}
function makeCard(data) {
  let name = data.name;
  let number = data.id;
  let pic = data.sprites.front_default;
  console.log(number);

  html += `<div class="poke-card">
  <h1>${name} #${number}</h1> 
  <img class="pokeimg" src="${pic}"></img>
  </div>`;

  pokemonEl.innerHTML = html;
  container.appendChild(pokemonEl);
  
  let images = document.querySelectorAll(".poke-card");
  for (let i = 0; i < images.length; i++) {
    images[i].style.backgroundColor = `red`;
    console.log(`object`);
  }
}

fetchPokemon();
