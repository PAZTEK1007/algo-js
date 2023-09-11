let input = Number(window.prompt("Entrez un nombre entre 1 & 7 !"));
if (input >= 1 && input <= 7){
    switch (input) {
        case 1:
            day = "Lundi";
            break;
        case 2:
            day = "Mardi";
            break;
        case 3:
            day = "Mercredi";
            break;
        case 4:
            day = "Jeudi";
            break;
        case 5:
            day = "Vendredi";
            break;
        case 6:
            day = "Samedi";
            break;
        case 7:
            day = "Dimanche";
            break;
        default:
            day = "Erreur Jour Invalide";
    }
    alert("Le jour correspondant au nombre " + input  + " est " + day);
} else {
    alert("Le nombre est invalide,  Entrez un nombre valide entre 1 & 7 !");
}