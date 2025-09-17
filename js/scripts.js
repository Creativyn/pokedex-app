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

  function addEventListener(button, pokemon) {
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    addEventListener(button, pokemon);
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

pokemonRepository.getAll().forEach((pokemon) => {
  pokemonRepository.addListItem(pokemon);
});
