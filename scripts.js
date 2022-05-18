
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
  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function(pokemon)
{
pokemonRepository.add(pokemon)
});
