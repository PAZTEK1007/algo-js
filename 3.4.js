function FindMinMax(array) {
    if (array.length === 0) {
      return "Le tableau est vide.";
    }
  
    let min = array[0];
    let max = array[0];
  
    for (let a = 1; a < array.length; a++) {
      if (array[a] < min) {
        min = array[a];
      }
      if (array[a] > max) {
        max = array[a];
      }
    }
  
    return {
      minimum: min,
      maximum: max
    };
  }
  
  const array = [9, 3, 17, 4, 2, 23, 10];
  
  const result = FindMinMax(array);
  
  console.log("Le minimum du tableau est : " + result.minimum);
  console.log("Le maximum du tableau est : " + result.maximum);
  