// http 모듈 블러오기
const http = require('http');
const fs = require('fs');

const PORT = Number(process.env.PORT)|| 3000;

const server = http.createServer((req, res) => {
    console.log("요청발생");
    console.log(req.method);
    res.setHeader("Content-Type", "text/html");
    //res.write("Hello Node!!");
    //res.end();
    const readStream = fs.createReadStream(__dirname + "/index.html", "utf8");
    readStream.pipe(res);
});

server.listen(PORT, () => {
    console.log(`${PORT}번 포트로 서버 실행`);
});