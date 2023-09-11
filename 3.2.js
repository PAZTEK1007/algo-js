let numbersArray = [1 ,2 ,3 ,4 ,5];
let numbersArray2 = [100 ,101 ,102];
let result = 0;
let result1 = 0;

for (let a = 0; a < numbersArray.length; a++) {
    result += numbersArray[a];
}
let Moyenne = result / numbersArray.length;
console.log("La moyenne est " + Moyenne);

for (let b = 0; b < numbersArray2.length; b++) {
    result1 += numbersArray2[b];
}
let Moyenne1 = result1 / numbersArray2.length;
console.log("La moyenne est " + Moyenne1);

