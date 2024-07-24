// Async -
//async function hello() {
//    console.log("hello");
// }

// Await function-

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("wether data");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api();// 1st call
    await api();// 2nd call
}