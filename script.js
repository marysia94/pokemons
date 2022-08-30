import pokemonArray from "./data/pokemon.js"
console.log(pokemonArray)

const cardContainer = document.querySelector(".card-container");
const pokeNames = pokemonArray.map(pokemon => {
    return pokemon.name;
})


const displayPokemon = (pokemon) => {
    cardContainer.innerHTML +=
    `
    <div class="card">
        <img class="card__image" src="${pokemon.sprite}">
        <div class="card__content">
            <div class="card__heading">${pokemon.name}</div>
            <div class="card__text">"${pokemon.name} is a ${pokemon.type} type pokemon."</div>
        </div>
    </div>
    `
};

pokemonArray.forEach(pokemon => displayPokemon(pokemon));