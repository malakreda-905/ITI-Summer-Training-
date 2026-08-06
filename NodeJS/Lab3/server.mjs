import http from "http";
import express from "express";
import fs from "fs";
import path from "path";

const app = express();

const mainPage = fs.readFileSync("./../Lab2/templates/main.html", "utf8");
const welcomePage = fs.readFileSync("./../Lab2/templates/welcome.html", "utf8");

app.use(express.json());
app.use(express.urlencoded());


app.get("/", (req, res) => {
    res.send(mainPage);
});

app.get("/main.html", (req, res) => {
    res.send(mainPage);
});

app.get("/styles/style.css", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "./../Lab2/styles/style.css"));
});

app.get("/scripts/script.js", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "./../Lab2/scripts/script.js"));
});

app.get("/clients", (req, res) => {
    const clients = JSON.parse(fs.readFileSync("./../Lab2/clients.json", "utf8"));

    res.json(clients);
});

app.post("/register", (req, res) => {

    const data = req.body;

    let clients = JSON.parse(
        fs.readFileSync("./../Lab2/clients.json", "utf8")
    );

    clients.push(data);

    fs.writeFileSync("./../Lab2/clients.json", JSON.stringify(clients, null, 2));

    let page = welcomePage
        .replace("{{{{NAME}}}}", data.name)
        .replace("{{{{MOBILE}}}}", data.mobile)
        .replace("{{{{EMAIL}}}}", data.email)
        .replace("{{{{ADDRESS}}}}", data.address);

    res.send(page);
});

app.all("*notfound", (req, res) => {
    res.status(404).json({
        message: "Not Found"
    });
});

app.listen(7000, (err) => {
    if (err) {
        console.error(err);
        process.exit();
    }

    console.log("http://localhost:7000");
});