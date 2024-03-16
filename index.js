// requiring all necceseary modules...
const fs = require("fs");
const path = require("path");

const http = require("http");
const url = require("url");

//readiing files...
const tindogCSS_template = fs.readFileSync(`${__dirname}/tindog.css`, "utf-8");
const tindogHTML_template = fs.readFileSync(
  `${__dirname}/tindog.html`,
  "utf-8"
);
const tindogImage_template = fs.readFileSync(`${__dirname}/images/iphone6.png`, "utf-8");


const server = http.createServer((req, res) => {
    const path = req.url;
  if (path === "/tindog" || path === '/') {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(tindogHTML_template);
    res.end(tindogImage_template);
  } else if (path === "/css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.end(tindogCSS_template);
  }else{
    // req.writeHead(404, {'content-type': 'text'});
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("active port tindog");
});
