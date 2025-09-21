let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
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

  function showLoadingMessage(message = "Page is loading.") {
    const container = document.getElementById("loading-container");
    const messageDiv = document.getElementById("loading-message");
    messageDiv.textContent = message;
    container.style.display = "block";
  }

  function hideLoadingMessage() {
    const container = document.getElementById("loading-container");
    container.style.display = "none";
  }

  function loadList() {
    showLoadingMessage;
    return fetch(apiUrl)
      .then(function (response) {
        hideLoadingMessage;
        return response.json(); //Returns a promise
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        hideLoadingMessage;
        console.error(e);
      });
  }

  function loadDetails(item) {
    showLoadingMessage;
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        hideLoadingMessage;
        return response.json();
      })
      .then(function (details) {
        //Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        hideLoadingMessage;
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  //Now the data is loaded
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
