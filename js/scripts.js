//@ts-check
let pokemonRepository = (function () {
  let pokemonList = [
  { ID :"1", name: "Charizard", height: 5.07, type: ["fire", "flying"]},
  { ID :"2", name: "Oddish", height: 1.08, type: ["grass", "poison"]},
  { ID :"3", name: "Jigglypuff", height: 1.08, type: ["normal", "fairy"]}
]
  
  function add() {
    pokemonList.push(pokemon);
  }
  
  function getAll() {
    return pokemonList;
  }

  return {
    getAll: getAll,
    add: add
  }


//   for (let i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height < 6.00 && pokemonList[i].height > 2.00){
//     // console.log(pokemonList[i].name + " Wow, that's a big pokemon.");
//     document.write(pokemonList[i].name + " Wow, that's a big pokemon. ");
//   } else if (pokemonList[i].height < 2.00 && pokemonList[i].height > 1.00){
//     // console.log(pokemonList[i].name + " This is a small pokemon")
//     document.write(pokemonList[i].name + " This is a small pokemon");
//   }
// }

for (let i = 0; i < pokemonList.length; i++) {
if (pokemonList[i].height < 6.00 && pokemonList[i].height > 2.00){
// console.log(pokemonList[i].name + " Wow, that's a big pokemon.");
document.write(pokemonList[i].name + " Wow, that's a big pokemon. ");
} else if (pokemonList[i].height < 2.00 && pokemonList[i].height > 1.00){
// console.log(pokemonList[i].name + " This is a small pokemon")
document.write(pokemonList[i].name + " This is a small pokemon");
}

  
pokemonList.forEach( item => console.log(item)) 

})();

pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemon.name + pokemon.height);
});

console.log(pokemonRepository.getAll())