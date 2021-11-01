const http = require('http');

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

console.log(__filename);
console.log(__dirname);
/*
const {readFile, readFileSync}= require('fs');

try{
  const data = readFileSync("hi.text", "utf-8");
console.log(data);
} catch(err){
  console.error(err);
}
fs.readfileSync('hi.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log("Log from outside");