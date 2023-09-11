// Version 1 : Utilisation de push() pour créer une copie

function  Copy(Original) {
    const copie = [];
  
    for (let a = 0; a < Original.length; a++) {
      copie.push(Original[a]);
    }
  
    return copie;
  }
  
  const Original = [1, 2, 3, 4, 5];
  const Fake = Copy(Original);
  
  console.log("Tableau original :", Original);
  console.log("Copie du tableau :", Fake);
  

function Copy2(Original_) {
    return Original_.slice();
  }
  
  const Original_ = [1, 2, 3, 4, 5];
  const Fake_ = Copy2(Original_);
  
  console.log("Tableau original :", Original_);
  console.log("Copie du tableau :", Fake_);
  