let pokemonRepository = (function () {
  let pokemonList = []; //empty array

  function add(pokemon) {
    pokemonList.push(pokemon);

    function isObject(value) {
      return value !== null && typeof value === "object";
    } // checks if the typeof parameter is an object
  }
  // if ((isObject = true)) {
  //   return pokemonList;
  // } else {
  //   return null;
  // } // the bonus task said 'In combination with a conditional, make sure you can only add the passed argument of the function to pokemonList if it’s an object. This was the only way I could think of to do this. However, it wiped my list so I commented it out.

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

document.write(pokemonRepository.getAll()); //[]
pokemonRepository.add("Venusaur");
document.write(pokemonRepository.getAll()); // [ { name: "Venusaur"} ]

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

// for (let i = 0; i < pokemonList.length; i++) {
//   let pokemon = pokemonList[i];
//   document.write(`${pokemon.name} (height: ${pokemon.height})`);
// }

function myLoopFunction(pokemon) {
  document.write("<p>" + pokemon.name + " " + pokemon.height + "<p>");
}

// function filterPokemon(arr, query) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterPokemon(pokemon, "Lug")); //My attempt to filter. Wiped everything but Venusaur.

pokemonList.forEach(myLoopFunction);

if (pokemon.height > 4) {
  document.write(" - Wow, that's big!");
  document.write("<br>");
}
