function rand10(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


let result = rand10(1, 10);
alert("Le nombre aléatoire est " + result);
