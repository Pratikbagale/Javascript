// Array method :
//                slice(): returns a piece of the array slice(startldx,endldx)

//let marvelheroes = ["thor", "spiderman", "ironman", "antman", "Dr.strange"];


//console.log(marvelheroes);

//console.log(marvelheroes.slice(3));

// splice(): change original array(add,remove,replace)  splice(startldx,delCount,newE1...)

let arr = [1, 2, 3, 4, 5, 6, 7];

//arr.splice(2,2,101,102);

// Add Element 
//arr.splice(2,0,101)

// Delete Element
//arr.splice(3, 1);

// Replace Element

arr.splice(3, 1, 101);