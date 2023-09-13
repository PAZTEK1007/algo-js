function calcDistance (x1, y1, x2, y2 ) {
    
    let DeltaX = x1 - x2 ;
    let DeltaY = y1 - y2;

    const DistanceCalc = DeltaX * DeltaX + DeltaY * DeltaY;
    let Distance = Math.sqrt(DistanceCalc);
    return Distance;
}
let x1 = +window.prompt("Type a first coordinate of Point A");
let y1 = +window.prompt("Type a second coordinate of Point A");
let x2 = +window.prompt("Type a first coordinate of Point B");
let y2 = +window.prompt("Type a second coordinate of Point B");
let result = calcDistance(x1 , y1, x2, y2);
alert("The distance between A & B :" + result);