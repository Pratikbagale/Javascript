// Create a function that takes an array containing only numbers and return the first element

let arr = [1, 2, 3, 4];
function getLastElement(arr) {
    // check if the array is not empty

    if (arr.length > 0) {
        return arr[0];
    } else {
        return null;
    }
}

console.log(getLastElement(arr));