let _input = Number(window.prompt("Entrez un nombre n: "));
let sum = 0;

if (_input > 0) {
    for (let a = 0; a < _input; a++) {
    let _input2 = Number(window.prompt(`Entrez le nombre #${a + 1}`));
    let num = parseFloat(_input2);
    if (num) {
        sum += num;
      } else {
        alert("Ce n'est pas un nombre valide.");
        a--;
      }
    }
  
    alert(`La somme des ${_input} nombres que vous avez entrés est : ${sum}`);
  } else {
    alert("Veuillez entrer un nombre entier positif pour n.");
  }