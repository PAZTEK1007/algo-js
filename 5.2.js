function randomizeCast(TvSerie){

    let membercastcopy = [...TvSerie.membercast];

    for (let i = membercastcopy.length - 1; i > 0; i--) {

      let j = Math.floor(Math.random() * (i + 1));
      [membercastcopy[i], membercastcopy[j]] = [membercastcopy[j], membercastcopy[i]];

    }

    let randomCast = { ...TvSerie, membercast: membercastcopy };
    return randomCast;
}

let name_ = prompt("What's your favourite TV serie ?");
let production = +window.prompt("What year was the series produced?");
let membercast = prompt("Which actor starred in the series?");
let membercast_ = membercast.split(",");

let TvSerie = {

    name: name_,
    production: production,
    membercast: membercast_,

};

let TvSerieOject = randomizeCast(TvSerie);
let TvSerieJSON = JSON.stringify(TvSerieOject, null,1);
alert(TvSerieJSON);