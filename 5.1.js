
function askTvSerie(){

    let TvSerie = {

        name: "Son's of Anarchy",
        production: ["Fox 21", "FX Production", "The Linson Company", "Sutter Ink"],
        membercast: ["Charlie Hunnam" ,"Mark Boone Junior" ,"Katey Sagal" ,"Kim Coates" ,"Tommy Flanagan" , "Ron Perlman"],
        
    };

    return TvSerie;
} 

let TvSerieOject = askTvSerie();
let TvSerieJSON = JSON.stringify(TvSerieOject, null,1);
alert(TvSerieJSON);
    