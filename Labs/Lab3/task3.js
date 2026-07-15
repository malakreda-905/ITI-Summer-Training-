function min(a,b){
    if(a < b){
        return a;
    }
    else{
        return b;
    }
}

function max(a,b){
    if(a > b){
        return a;
    }   
    else{
        return b;
    }           
}

var x = prompt("Enter the first number: ");
while(isNaN(x)){
    alert("Please enter a valid number.");
    x = prompt("Enter the first number: "); 
}
var y = prompt("Enter the second number: ");
while(isNaN(y)){
    alert("Please enter a valid number.");
    y = prompt("Enter the second number: "); 
}
var z = prompt("Enter a string: (odd or even or no)"); 
while(z !== "odd" && z !== "even" && z !== "no"){
    alert("Please enter a valid option.");
    z = prompt("Enter a string: (odd or even or no)"); 
}

var a = min(x, y);
var b = max(x, y);

var sum = 0; 

if(z === "odd"){
    let numbers = "";
    for(var i = a; i <= b; i++){
        if(i % 2 !== 0){
            sum += Number(i);
            numbers += i + " ";
        }
    }
    console.log(numbers);
    console.log("The sum of odd numbers between " + a + " and " + b + " is: " + sum);
}

else if(z === "even"){
    let numbers = "";
    for(var i = a; i <= b; i++){
        if(i % 2 === 0){
            sum += Number(i);
            numbers += i + " ";
        }
    }
    console.log(numbers);
    console.log("The sum of even numbers between " + a + " and " + b + " is: " + sum);
}

else if(z === "no"){
    let numbers = "";
    for(var i = a; i <= b; i++){
        sum += Number(i);
        numbers += i + " ";
    }   
    console.log(numbers);
    console.log("The sum of numbers between " + a + " and " + b + " is: " + sum);
}
