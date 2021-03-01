const http = require("http");

const sever = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>Hello Node!</h1>");
  res.end("<p>Hello Sever!</p>");
});

sever.listen(8080);

sever.on("listening", () => {
  console.log("sever is running on port: 8080");
});
sever.on("error", (error) => {
  console.error(error);
});
