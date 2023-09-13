function factorial(a) {

    if (a === 0 || a === 1) {
    
        return 1;
    }

    return a * factorial(a - 1);
}

let a = +window.prompt("Type a number to find out the factorial");
let result = factorial(a);
alert("Factorial of " + a + " : " + result);