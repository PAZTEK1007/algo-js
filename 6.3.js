class rectangle {
    //Crée une classe avec les différentes valeurs 
    constructor(topLeftXPos, topLeftYPos, width, length) {

        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;

        }
        //Trouver les 4 coins du premier rectangle
        collides(otherRectangle){

            const topLeft = {x : this.topLeftXPos, y : this.topLeftYPos};
            const topRight = {x : this.topLeftXPos + this.length, y : this.topLeftYPos};
            const botLeft = {x : this.topLeftXPos, y : this.topLeftYPos + this.width};
            const botRight = {x : this.topLeftXPos + this.lenght, y : this.topLeftYPos + this.width};
        // Trouver les 4 coins du second rectangle
            const OthtopLeft = {x : otherRectangle.topLeftXPos, y : otherRectangle.topLeftYPos};
            const OthtopRight ={x : otherRectangle.topLeftXPos + otherRectangle.lenght, y : otherRectangle.topLeftYPos};
            const OthbotLeft = {x : otherRectangle.topLeftXPos, y: otherRectangle.topLeftYPos + otherRectangle.width};
            const OthbotRight = {x : otherRectangle.topLeftXPos + otherRectangle.lenght, y : otherRectangle.topLeftYPos + otherRectangle.width};

            if (topLeft.x < OthtopRight.x && topRight.x > Othtopleft.x && topLeft.y < OthbotRight.y && OthbotLeft.y > Othtopleft.y){
            return true;
        };  // Retour du if si une collision se passe 

            return false;
            // Retour du if si il y a pas de collision
        } 

        toString() {

            return `rectangle : (x: ${this.topLeftXpos}, y: ${this.topLeftYpos}, width: ${this.width}, length: ${this.length})`;
    
}
}
//Cette fonction sert a généré des rectangle aléatoirement
function RandomRectangle() {

    const topLeftXPos = Math.floor(Math.random() * 1000); // Randomisé de 0 à 1000
    const topLeftYPos = Math.floor(Math.random() * 1000);
    const width = Math.floor(Math.random() * 10); // Randomisé de 0 à 10
    const height = Math.floor(Math.random() * 10);
    return new rectangle(topLeftXPos, topLeftYPos, width, height);
}
    const rectangle_ = [];
    for (let i = 0; i < 100; i++){
    rectangle_.push(RandomRectangle());

}
// Verifie et affiche quand un collision se passe
for (let i = 0; i < rectangle_.length; i++) {

    for (let j = i + 1; j < rectangle_.length; j++) {
        
        if (rectangle_[i].collides(rectangle_[j])) {
           console.log(`ALERT Collision  ${rectangle_[i]} "and" ${rectangle_[j]}`);
        }
    }
}
