function rand10(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}

function multiRand(n) {

    let numberArray = [];

    for (let i = 0; i < n; i++){

    let randomize = rand10(1, 10);
    numberArray.push(randomize);

    }

    return numberArray;
}

let n = +window.prompt("Enter your how many number u want to randomize !");
let result = multiRand(n);
alert(result);
