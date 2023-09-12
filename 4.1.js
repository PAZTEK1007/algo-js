let long = prompt("Ecris une longueur !");
let large = prompt("Ecris une largeur !");
parseInt(long ,large);

function calcSurface (a, b){
    return a * b;
}

let result = calcSurface(long, large);
alert("Le rectancgle à une surface de " + result);
