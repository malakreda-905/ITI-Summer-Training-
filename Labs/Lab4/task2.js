var r = prompt("Enter the radius of the circle: ");
while(isNaN(r)){
    alert("Please enter a valid number.");
    r = prompt("Enter the radius of the circle: "); 
}
var area = Math.PI * r * r;
console.log("The area of the circle with radius " + r + " is: " + area);



var n = prompt("Enter a number to get its square root: ");
while(isNaN(n)){
    alert("Please enter a valid number.");
    n = prompt("Enter a number to get its square root: ");
}
var sqrt = Math.sqrt(n);
alert("The square root of " + n + " is: " + sqrt);



var angle = prompt("Enter an angle in degrees to get its cosine: ");
while(isNaN(angle)){
    alert("Please enter a valid number.");
    angle = prompt("Enter an angle in degrees to get its cosine: ");
}
var radians = angle * (Math.PI / 180); 
var cosine = Math.cos(radians).toFixed(0);
console.log("The cosine of " + angle + " degrees is: " + cosine);