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
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

pokemonRepository.getAll().forEach((pokemon) => {
  document.write(pokemon.name + " " + pokemon.height);
  if (pokemon.height > 4) {
    document.write(" - Wow, that's big!");
  }
  document.write("<br>");
});

pokemonRepository.add("Venusaur");
document.write(pokemonRepository.getAll()); // [ { name: "Venusaur"} ]
