"use strict";

var _pokemon = _interopRequireDefault(require("./data/pokemon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_pokemon["default"]);
var cardContainer = document.querySelector(".card-container");

var pokeNames = _pokemon["default"].map(function (pokemon) {
  return pokemon.name;
});

var displayPokemon = function displayPokemon(pokemon) {
  cardContainer.innerHTML += "\n    <div class=\"card\">\n        <img class=\"card__image\" src=\"".concat(pokemon.sprite, "\">\n        <div class=\"card__content\">\n            <div class=\"card__heading\">").concat(pokemon.name, "</div>\n            <div class=\"card__text\">\"").concat(pokemon.name, " is a ").concat(pokemon.type, " type pokemon.\"</div>\n        </div>\n    </div>\n    ");
};

_pokemon["default"].forEach(function (pokemon) {
  return displayPokemon(pokemon);
});