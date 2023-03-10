document.querySelector('button').addEventListener('click', function () {
    console.log(evt)
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function () {
//     console.log(e.key)
//     console.log(e.code)
// })

// const input = document.querySelector('input');
// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
// })

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!")
        case "ArrowDown":
            console.log("Down!")
        case 'ArrowLeft':
            console.log("Left!")
        case 'ArrowRight':
            console.log("Right!")
            break;
        default:
            console.log("Ignored")

    }
})