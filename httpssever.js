const http = require('http');

const port = process.env.PORT || 9090;

const sever = http.createServer((req, res)=>{
    res.statusCode = 200;
    // res.setHeader('Content-Type','type/html');
    res.end('<h1> This is chandrashekar </h1> ');
})
sever.listen(port,() => {
    console.log(`sever lsiiting on port ${port}`);
});