let arr = ["bread", " milk", "sugar", "apple", "butter"];

function getLastItem(arr) {
    if (arr.length > 0) {
        return arr[arr.length - 1];
    } else {
        return null;
    }
}

console.log(getLastItem(arr));