const apiURL = "https://pokeapi.co/api/v2/pokemon/";
let pokeNumber = 10;
let html = ``;
const container = document.getElementById(`container`);
let pokemonDiv = document.createElement("div");

function getPokemon(i) {
  let pokeURL = apiURL + i;
  fetch(pokeURL)
    .then((response) => response.json())
    .then((data) => {
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
  let pic2 = `https://veekun.com/dex/media/pokemon/sugimori/${number}.png`;
  console.log(number);

  html += `<div class="poke-card">
  <h1>${name} #${number}</h1> 
  <img class="pokeimg" src="${pic}"></img>
  </div>`;

  pokemonDiv.innerHTML = html;
  let images = document.querySelectorAll(".poke-card img");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("data-adaptive-background", 1);
    // data-adaptive-background se dodaje na sliku da bi jquery plugin radio
  }
  setBG(images); //za menjanje boja
  container.appendChild(pokemonDiv);
}

function setBG(images) {
  if (images != null) {
    $.adaptiveBackground.run(); //funkcija iz plugina
    //ako slika postoji, treba da promeni boju ?
  } else {
    console.log(`e`);
  }
}
fetchPokemon();