// JavaScript Promise

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve("success");
        } else {
            reject("error");
        }
    }, 1000);
});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})
