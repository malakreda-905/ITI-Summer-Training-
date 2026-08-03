function add() {
    let result = 0;
    for(let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

function sub() {
    let result = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
        result -= arguments[i];
    }
    return result;
}

function multp() {
    let result = 1;
    for(let i = 0; i < arguments.length; i++) {
        result *= arguments[i];
    }
    return result;
}

function div() {
    let result = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
        if(arguments[i] === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        result /= arguments[i];
    }
    return result;
}

const http = require('http');
const fs = require("fs");


const server = http.createServer((req, res) => {
    const splits = req.url.split("/").filter(Boolean);

    const operation = splits[0];
    const values = splits.slice(1).map(Number);

    let result;

    try {

        switch(operation) {

            case "add":
                result = add(...values);
                break;

            case "sub":
                result = sub(...values);
                break;

            case "multp":
                result = multp(...values);
                break;

            case "div":
                result = div(...values);
                break;

            default:
                res.writeHead(404, {
                    "Content-Type": "application/json"
                });

                return res.end(JSON.stringify({
                    message: "Invalid operation"
                }));
        }

        const responseObj = {
            operation,
            values,
            result,
            message: `${operation} of ${values.join(", ")} = ${result}`
        };

        fs.writeFile(
            "result.json",
            JSON.stringify(responseObj, null, 2),
            (err) => {
                if(err)
                    console.log(err);
            }
        );

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(responseObj));

    } catch(err) {

        res.writeHead(400, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            error: err.message
        }));
    }
});

server.listen(5050, () => {
    console.log("Server is running on port 5050");
});