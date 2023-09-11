let min =  Number(window.prompt("Type min number", "0"));
let current = Number(window.prompt("Type current number", "0"));
let max = Number(window.prompt("Type max number", "0"));

if (max < min){
    alert("ERROR");
}
if (min < current && max > current){
    console.log(current);
} 