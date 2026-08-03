function add() {
    var result = 0;
    for(var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

function sub() {
    var result = arguments[0];
    for(var i = 1; i < arguments.length; i++) {
        result -= arguments[i];
    }
    return result;
}

function multp() {
    var result = 1;
    for(var i = 0; i < arguments.length; i++) {
        result *= arguments[i];
    }
    return result;
}

function div() {
    var result = arguments[0];
    for(var i = 1; i < arguments.length; i++) {
        if(arguments[i] === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        result /= arguments[i];
    }
    return result;
}

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    
});