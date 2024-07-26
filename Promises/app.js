// Promises in Javascript
// lets create new promise

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log(" i am a promise");
        //resolve("success");

        reject("not available");
    });
}


let promise = getPromise();
promise.then((res) => {
    console.log("promise fullfilled");
});

promise.catch((err) => {
    console.log("rejected", err);
});

//* resolve & reject are callbacks provided by Javascript

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }