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
//loop to display "wow thats big" if height is above 1.0"
for (let i=0; i< pokemonList.length; i++)
{
  if (pokemonList[i].height >1.0)
    {
      document.write(pokemonList[i].name + pokemonList[i].height + ' Wow, that\'s big!');
    }
      else {
        document.write(pokemonList[i].name + pokemonList[i].height);
      }
};
