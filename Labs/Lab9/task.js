var fruits = ["apple", "strawberry", "banana", "orange", "mango"]; 

var res1 = fruits.every(fruit => typeof fruit === "string"); 
console.log(res1); 

var res2 = fruits.some(fruit => fruit[0] === "a"); 
console.log(res2); 

var res3 = fruits.filter(fruit => fruit[0] === "b" || fruit[0] === "s"); 
console.log(res3); 

var res4 = fruits.map(fruit => "I like " + fruit); 
console.log(res4); 

var res5 = res4.forEach(fruit => {console.log(fruit)}); 