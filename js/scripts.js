let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Ninetales",
      height: "1.1",
      types: ["fire"],
    },
    {
      name: "Fearow",
      height: "1.2",
      types: ["flying", "normal"],
    },
    {
      name: "Arbok",
      height: "3.5",
      types: ["poison"],
    },
    {
      name: "Scyther",
      height: "1.5",
      types: ["bug", "flying"],
    },
    {
      name: "Umbreon",
      height: "1",
      types: ["dark"],
    },
    {
      name: "Lugia",
      height: "5.2",
      types: ["psychic", "flying"],
    },
    {
      name: "Venusaur",
      height: "2",
      types: ["grass", "poison"],
    },
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener("click", function (showDetails) {
      console.log(pokemon.name);
    }); //shows more details about a pokemon when it's name is clicked
  }

  // function showDetails(pokemon) {
  //   console.log();
  // }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
