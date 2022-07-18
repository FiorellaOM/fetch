
function getFirstGenPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(allpokemon => {
        console.log(allpokemon);
            const pokeList = allpokemon.results;
            pokeList.forEach(pokemon => {
                getPokemonData(pokemon);
            });
        }
    )
}

function getPokemonData(pokemon) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.name)
    .then(response => response.json())
    .then(pokemonData => {
            loadPokemon(pokemonData)
        }
    )
}

function loadPokemon(pokemon) {
    const container = document.getElementById("pokemonContainer");
    const card = document.createElement("div");
    const node = document.createElement("a");
    const picture = document.createElement("img");
    node.innerHTML = pokemon.name;
    node.id = pokemon.name;
    picture.classList = "pokePicture";
    picture.srcset = pokemon["sprites"]["other"]["official-artwork"].front_default;
    card.classList.add("pokeCard");
    card.appendChild(node);
    card.appendChild(picture);
    container.appendChild(card);
}

getFirstGenPokemon();


