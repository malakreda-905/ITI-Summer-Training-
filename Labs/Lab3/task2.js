var x = prompt("Enter a number: ");
if(isNaN(x)){
    alert("Please enter a valid number.");
    x = prompt("Enter a number: "); 
}
var sum = Number(x); 

while(x != 0 && sum <= 100){
    x = prompt("Enter a number: ");
    if(isNaN(x)){
        alert("Please enter a valid number.");
        x = prompt("Enter a number: "); 
    }
    sum += Number(x);       
}

console.log("The sum is: " + sum);