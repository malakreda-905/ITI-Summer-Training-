function fib1(num){
    if(arguments.length !== 1){
        throw new RangeError("You must pass exactly one parameter"); 
    }

    if(num < 1){
        throw new Error("Fibonacci works only positive numbers"); 
    }
    
    if(num == 1){
        return 0; 
    }

    let fib = [0, 1];
    for(var i = 2; i < num; i++){
        fib[i] = fib[i-1] + fib[i-2]; 
    }
    
    return fib; 
}

function fib2(num){
    if(arguments.length !== 1){
        throw new RangeError("You must pass exactly one parameter"); 
    }

    if(num < 1){
        throw new Error("Fibonacci works only positive numbers"); 
    }
    
    let fib = [0, 1];
    let i = 1; 
    while(fib[i] <= num){
        i++; 
        if(fib[i-1] + fib[i-2] > num){
            break; 
        }
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib; 
}


var num = prompt("Enter your value: "); 

while(isNaN(num)){
    alert("You must enter number"); 
    var num = prompt("Enter your value: ");
}

try {
    let arr1 = fib1(num); 
    let arr2 = fib2(num); 

    console.log(`Displaying first ${num} elements of fibonacci series: ${arr1}`); 
    console.log(`Displaying all elements in fibonacci series <= ${num}: ${arr2}`); 
} catch (error) {
    console.log(error); 
}