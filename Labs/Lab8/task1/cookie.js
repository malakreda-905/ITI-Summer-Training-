const secs = 86400; 
var cookie = ""; 

function setCookie(name, value, days){
    var len = arguments.length; 

    if(!(len == 2 || len == 3)){
        throw new RangeError("Number of args must be 2 or 3"); 
    }

    if(name.trim() === "" || (typeof name !== "string")){
        throw new TypeError("Name of the cookie must be given"); 
    }

    if(days){
        if(isNaN(days)){
            throw new TypeError("Number of expiry days must be number"); 
        }
        document.cookie = name + "=" + value + ";Max-Age=" + days*secs; 
    }
    
    else{
        document.cookie = name + "=" + value; 
    }
}

function hasCookie(name){
    if(arguments.length !== 1){
        throw new RangeError("You must pass exactly the name of the cookie"); 
    }
    if(typeof name !== "string"){
        throw new TypeError("Name of the cookie must be string"); 
    }
    var cookies = document.cookie.split("; ");
    
    for(var i = 0; i < cookies.length; i++){
        var row = cookies[i].split("="); 
        if(row[0] === name){
            cookie = row[1]; 
            return true; 
        }
    }
    return false; 
}

function getCookie(name){
    if(arguments.length !== 1){
        throw new RangeError("You must pass exactly the name of the cookie"); 
    }

    if(typeof name !== "string"){
        throw new TypeError("Name of the cookie must be string"); 
    }

    if(!hasCookie(name)){
        throw new Error("Cookie not found!!!!!!"); 
    }

    return cookie; 
}

function deleteCookie(name){
    if(arguments.length !== 1){
        throw new RangeError("You must pass exactly the name of the cookie"); 
    }

    if(typeof name !== "string"){
        throw new TypeError("Name of the cookie must be string"); 
    }

    if(!hasCookie(name)){
        throw new Error("Cookie not found!!!!!!"); 
    }

    document.cookie = name + "=; Max-Age=0"; 
}

function allCookie(){
    if(document.cookie === ""){
        throw new Error("No cookies are set!"); 
    }

    var cookies = document.cookie.split("; ");
    
    return cookies; 
}