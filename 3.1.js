let numbersArray = [1 ,2 ,3 ,4 ,5];
let numbersArray2 = [100 ,101 ,102];
let sum = 0;
let sum1 = 0;

for (let a = 0; a < numbersArray.length; a++) {
    sum += numbersArray[a];
}
console.log("La somme est " + sum);

for (let b = 0; b < numbersArray2.length; b++) {
    sum1 += numbersArray2[b];
}
console.log("La somme est " + sum1);