//@ts-check
let pokemonList = [
    { ID :"1", name: "Charizard", height: 5.07, type: ["fire", "flying"]},
    { ID :"2", name: "Oddish", height: 1.08, type: ["grass", "poison"]},
    { ID :"3", name: "Jigglypuff", height: 1.08, type: ["normal", "fairy"]}
  ];


for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 6.00 && pokemonList[i].height > 2.00){
      console.log(pokemonList[i].name + " Wow, that's a big pokemon");
    } else if (pokemonList[i].height < 2.00 && pokemonList[i].height > 1.00){
      console.log(pokemonList[i].name + " This is a small pokemon")
    }
  }

let repository = [
    {ID :"1", name: "Charizard", height: 5.07, type: ["fire", "flying"]},
    { ID :"2", name: "Oddish", height: 1.08, type: ["grass", "poison"]},
    { ID :"3", name: "Jigglypuff", height: 1.08, type: ["normal", "fairy"]}
  ];
