function disVal(object , str){
    return object[str];
}

object = {
    name: "malak",
    age: 20
}; 

console.log(disVal(object , "age"));