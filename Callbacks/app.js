// function sum(a, b) {
//     console.log("a+b");
// }
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }
// calculator(1, 2, (a, b) => {
//     console.log(a + b);
// });

// Nesting

// let age = 19;
// if (age >= 18) {
//     if (age >= 60) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {

        //2s
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");

        }, 5000);
    });
}

// Promise chain

let p1 = getData(1);
p1.then((res) => {
    console.log(res);
});
// Callback Hell is a problem in javascript
// Callback Hell
// getData(1, () => {
//     console.log("getting data2 .....");
//     getData(2, () => {
//         console.log("getting data3 .....");
//         getData(3, () => {
//             console.log("getting data4 .....");
//             getData(4);
//         });
//     });
// });
// if we have three data and we want one after another within more time
//data1
//data2
//data3

