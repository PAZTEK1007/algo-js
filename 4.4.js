let inputAr = ["Mathias", "Antoine", "Pierre", "Thomas", "Alexande.V", "Alexande", "Bastien", "Carole" , "Dorian", "Elisabeth" , "Elodie", "Justin", "Justine L" , "Justine" , "Kimi", "Layla", "Lidwine", "Lucas" , "Marie", "Okly", "Robin", "Rosalie", "Stephane", "Tim", "Valentin" ,"Virginie"];

function pickLearner(inputAr, n) {

    let randomLearners = [];

    for (let i = 0; i < n; i++) {

        let randomIndex = Math.floor(Math.random() * inputAr.length);
        randomLearners.push(inputAr.splice(randomIndex, 1)[0]);
    }

    if (n <= 0 || n > inputAr.length) {

        alert("ERROR MESSAGE //");
    }
   
    return randomLearners;

}

let n = +window.prompt("Type a number for randomize !");
let randomLearners = pickLearner(inputAr, n);
alert(randomLearners);