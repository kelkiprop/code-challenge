function ToTestSpeed(){
let speed = prompt ("enter speed", "0");
const MaximumSpeed = 70;
const speedPerPoint = 5;
let message=""
let DemeritPoint = 0;
if (speed <= MaximumSpeed){
    console.log("ok");
}
else {
DemeritPoint = Math.floor((speed -MaximumSpeed)/speedPerPoint);
if (DemeritPoint>12){
    console.log("license suspended");
}
else{
    console.log("points " + DemeritPoint);
}
}
return message;
}
console.log(ToTestSpeed());