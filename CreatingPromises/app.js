// new Promise((resolve, reject) => {
//     resolve();

// })

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then(() => {
        console.log("DONE WITH REQUEST")
    })