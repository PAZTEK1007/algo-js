
function askTvSerie(){

    let TvSerie = {

        name: "Son's of Anarchy",
        production: 2008,
        membercast: ["Charlie Hunnam" ,"Mark Boone Junior" ,"Katey Sagal" ,"Kim Coates" ,"Tommy Flanagan" , "Ron Perlman"],

    };

    return TvSerie;
} 

let TvSerieOject = askTvSerie();
let TvSerieJSON = JSON.stringify(TvSerieOject, null,1);
alert(TvSerieJSON);
    