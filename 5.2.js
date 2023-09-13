function randomizeCast(TvSerie){

    let membercastcopy = [...TvSerie.membercast];

    for (let i = membercastcopy.length - 1; i > 0; i--) {

      let j = Math.floor(Math.random() * (i + 1));
      [membercastcopy[i], membercastcopy[j]] = [membercastcopy[j], membercastcopy[i]];

    }

    let randomCast = { ...TvSerie, membercast: membercastcopy };
    return randomCast;
}

let TvSerie = {

    name: "Son's of Anarchy",
    production: ["Fox 21", "FX Production", "The Linson Company", "Sutter Ink"],
    membercast: ["Charlie Hunnam" ,"Mark Boone Junior" ,"Katey Sagal" ,"Kim Coates" ,"Tommy Flanagan" , "Ron Perlman"],

};

let TvSerieOject = randomizeCast(TvSerie);
let TvSerieJSON = JSON.stringify(TvSerieOject, null,1);
alert(TvSerieJSON);