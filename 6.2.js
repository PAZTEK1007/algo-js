class Rectangle {

    constructor(topLeftXPos, topLeftYPos, width, length) {

        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;

        }

        collides(otherRectangle){

            const topLeft = {x : this.topLeftXPos, y : this.topLeftYPos};
            const topRight = {x : this.topLeftXPos + this.length, y : this.topLeftYPos};
            const botLeft = {x : this.topLeftXPos, y : this.topLeftYPos + this.width};
            const botRight = {x : this.topLeftXPos + this.lenght, y : this.topLeftYPos + this.width};

            const OthtopLeft = {x : otherRectangle.topLeftXPos, y : otherRectangle.topLeftYPos};
            const OthtopRight ={x : otherRectangle.topLeftXPos + otherRectangle.lenght, y : otherRectangle.topLeftYPos};
            const OthbotLeft = {x : otherRectangle.topLeftXPos, y: otherRectangle.topLeftYPos + otherRectangle.width};
            const OthbotRight = {x : otherRectangle.topLeftXPos + otherRectangle.lenght, y : otherRectangle.topLeftYPos + otherRectangle.width};

            if (topLeft.x < OthtopRight.x && topRight.x > Othtopleft.x && topLeft.y < OthbotRight.y && OthbotLeft.y > Othtopleft.y){
            return true;
        };

        return false;
    } 
}



const Rectangle_A = new rectangle(0, 0, 4, 4);
const Rectangle_B = new rectangle(0, 0, 4, 4);

console.log(Rectangle_A.collides(Rectangle_B));  
   