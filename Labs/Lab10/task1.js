function displayInfo(obj){
    for(var i in obj){
        if(i !== "courseName" && i !== "courseDuration" && i !== "courseOwner"){
            throw new Error("The passed property must be courseName or courseDuration or courseOwner"); 
        }
    }
    let defObj = {
        courseName : "ES6",
        courseDuration : "3days",
        courseOwner : "JavaScript"
    };  

    let result = {...defObj , ...obj}; 

    console.log(`Course name: ${result.courseName}`); 
    console.log(`Course duration: ${result.courseDuration}`); 
    console.log(`Course owner: ${result.courseOwner}`); 
}

let obj1 = {
    courseName : "Algo",
    courseDuration : "one semester",
    courseOwner : "FCAI"
}; 

try {
    displayInfo(obj1); 
} 
catch (err) {
    console.log(err);
}

let obj2 = {
    courseName : "Algo",
    courseDuration : "one semester",
    courseCredits : "3 hours" 
}; 

try {
    displayInfo(obj2); 
} 
catch (err) {
    console.log(err);
}

let obj3 = {
    courseName : "Node js",
    courseDuration : "30days",
}

try {
    displayInfo(obj3); 
} 
catch (err) {
    console.log(err);
}
