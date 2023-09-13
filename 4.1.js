function calcSurface (a, b){

    return a * b;
}

let long = +window.prompt("Ecris une longueur !");
let large = +window.prompt("Ecris une largeur !");
let result = calcSurface(long, large);
alert("Le rectancgle à une surface de " + result);
