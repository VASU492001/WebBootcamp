function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("Mi");
}

function greet(firstName, lastName) {
    console.log(`Hey There, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeOf(x) !== 'number' || typeOf(y) !== 'number') {
        return false;
    }
    return x + y;

}