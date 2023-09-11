let type;
while (true) {
    let type = Number(window.prompt("Whats your favourite number ?"));

    if (type === 42){
        alert("Good choice");
        break;
    } else {
        alert("Are you sure ?");
    }
}
