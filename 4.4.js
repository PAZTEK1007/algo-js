let inputAr = ["Mathias", "Antoine", "Pierre", "Thomas", "Alexande.V", "Alexande", "Bastien", "Carole" , "Dorian", "Elisabeth" , "Elodie", "Justin", "Justine L" , "Justine" , "Kimi", "Layla", "Lidwine", "Lucas" , "Marie", "Okly", "Robin", "Rosalie", "Stephane", "Tim", "Valentin" ,"Virginie"];
function rand10(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function pickLearner(inputAr, n) {
    if (n <= 0 || n > inputAr.length) {
        alert("ERROR");
    }
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [inputAr[i], inputAr[j]] = [inputAr[j], inputAr[i]];
        }
    }
