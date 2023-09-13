class Circle {
    //Crée une classe avec les valeurs données
    constructor(xPos, yPos, radius){

        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset){ //Deplace le Cercle 

        this.xPos += xOffset;
        this.ypos += yOffset;
    }
    get surface (){
        return Math.PI * Math.pow(this.radius, 2);
    }
}

let myCircle = new Circle(1, 1, 2); // Test avec une cercle de x= 1 y=2 radius 3

alert("Initial Circle Properties:");
alert("xPos:" + myCircle.xPos);
alert("yPos:" + myCircle.yPos);
alert("Radius:" + myCircle.radius);
alert("Surface Area:" + myCircle.surface);

// Affiche les différentes valeurs obtenues
myCircle.move(2,4); 

alert("Update Circle Properties:");
alert("xPos:" + myCircle.xPos);
alert("yPos:" + myCircle.yPos);
alert("Radius:" + myCircle.radius);
alert("Surface Area:" + myCircle.surface);

// Affiche les différentes valeurs obtenues