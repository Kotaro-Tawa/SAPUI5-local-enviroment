const http = require("http");
const PORT = 8000;
const html = require("fs").readFileSync("./Mafia Role Assignment.html")

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type":"text-html"});
    res.write(html);
    res.end();
    });

server.listen(PORT, () => {
    console.log("server running!");
});

//execute → localhost:8000