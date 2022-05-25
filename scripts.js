
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Umbreon',
      height: 1,
      types: ['Dark']
    },
    {
      name: 'Zekrom',
      height: 2.9,
      types: ['Dragon, Electric']
    },
    {
      name: 'Luxray',
      height: 1.4,
      types: ['Electric']
    }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button');
    button.addEventListener('click', function(){
      console.log(showDetails(pokemon));
    });
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  }

  function showDetails(pokemon) {
    console.log(pokemon)
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

pokemonRepository.add(
  {
  name: 'Zoroark',
  height: 1.6,
  types: ['Dark']
  });


pokemonRepository.getAll().forEach(function(pokemon)
{
  pokemonRepository.addListItem(pokemon);
});

console.log(pokemonRepository.getAll());
