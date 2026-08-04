const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

let mainPage = fs.readFileSync("./templates/main.html", "utf8");
let welcomePage = fs.readFileSync("./templates/welcome.html", "utf8");
let style = fs.readFileSync("./styles/style.css", "utf8");
let script = fs.readFileSync("./scripts/script.js", "utf8");

http.createServer((req,res)=>{
    if(req.method === "GET")
    {
        switch(req.url)
        {
            case "/":
            case "/main.html":
                res.write(mainPage);
                break;

            case "/styles/style.css":
                res.write(style);
                break;

            case "/scripts/script.js":
                res.write(script);
                break;

            case "/clients":
                let clients = fs.readFileSync("./clients.json", "utf8");
                res.setHeader(
                    "Content-Type",
                    "application/json"
                );
                res.write(clients);
                break;

            default:
                res.statusCode = 404;
                res.write("Not Found");
        }
        res.end();
    }

    else if(req.method === "POST")
    {
        if(req.url === "/register")
        {
            let body = "";

            req.on("data",(chunk)=>{
                body += chunk;
            });

            req.on("end",()=>{
                let data = querystring.parse(body);
                let clients = JSON.parse(fs.readFileSync("./clients.json", "utf8")); 
                clients.push(data);
                fs.writeFileSync("./clients.json", JSON.stringify(clients, null, 2));

                let page =
                    welcomePage.replace("{{{{NAME}}}}",data.name)
                    .replace("{{{{MOBILE}}}}",data.mobile)
                    .replace("{{{{EMAIL}}}}",data.email)
                    .replace("{{{{ADDRESS}}}}",data.address);
                
                res.write(page);
                res.end();
            });
        }
    }

}).listen(7000,()=>{
    console.log(
        "Server Running On Port 7000"
    );
});