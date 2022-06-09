
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.list-group');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button');
    button.addEventListener('click', function(){
      showDetails(pokemon);
    });

    button.classList.add(
      'btn',
      'btn-custom',
      'col-xl-1',
      'col-md-2',
      'col-3',
      'mx-auto'
    );

    button.classList.add('list-group-item', 'list-group-item-action');
    button.setAttribute('data-target', '#pokemon-modal');
    button.setAttribute('data-toggle', 'modal');


    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showModal(pokemon);
    });
  }

  function loadList () {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    })
    .then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    })
    .then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      let types = [];
      details.types.forEach((pokemon) => types.push(pokemon.type.name));
      item.types = types;
    });
  }

//Modal function for Pokemon list
function showModal(pokemon) {
  let modalTitle = document.querySelector('#pokemon-modal-title');
  let modalBody = document.querySelector('.modal-body');

//resets modal content
  modalTitle.innerHTML = '';
  modalBody.innerHTML = '';

//Modal Title (its the Pokemon Name)
  let titleElement = document.createElement('h1');
    titleElement.classList.add('pokemon-title');
    titleElement.innerText = pokemon.name.toUpperCase();
//Modal Pokemons height
  let heightElement = document.createElement('p');
    heightElement.classList.add('pokemon-height');
  heightElement.innerText = 'Height: ' + pokemon.height;
//Modal Pokemon types
  let typesElement = document.createElement('p');
    typesElement.classList.add('pokemon-types')
    typesElement.innerText = 'Types: ' + pokemon.types;
//Modal Pokemon image/picture
  let imgElement = document.createElement('img');
    imgElement.src = pokemon.imageUrl;
    imgElement.classList.add('pokemon-img');
    imgElement.setAttribute('alt', '' + pokemon.name);

  modalTitle.appendChild(titleElement);
  modalBody.appendChild(heightElement);
  modalBody.appendChild(typesElement);
  modalBody.appendChild(imgElement);

  }

//returns functions
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon)
  {
    pokemonRepository.addListItem(pokemon);
  });
});
