const btn = document.querySelector('#v2');


btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

function scream() {
    console.log("AAAAHHHHHHH")
    console.log("Stop touching me")
}

btn.onmouseenter = scream;


document.querySelector('h1').onclick = () => {
    alert('You clicked h1 ')
}

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', function () {
    alert("CLICKED")
})

function twist() {
    console.log("TWIST")
}

function shout() {
    console.log("SHOUT")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);

