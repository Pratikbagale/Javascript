// Concat():joins multiple arrays & returns result

// let bollywood_heroes = ["akshaykumar", "tigershroof", "sunilshetty", "salmankhan"];

// let tollywood_heroes = ["vijaydevorkonda", "maheshbabu", "alluarjun"];

// let heroes = bollywood_heroes.concat(tollywood_heroes);

// console.log(heroes);

//  Unshift(): add to start

// it will add element on first 

let bollywood_heroes = ["akshaykumar", "tigershroof", "sunilshetty", "salmankhan"];
bollywood_heroes.unshift("shahrukhkhan");

// shift(): delete from start and return -pop

let marvelheroes = ["thor", "spiderman", "ironman"];

let val = marvelheroes.shift();
console.log("deleted", val);