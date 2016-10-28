const http = require('http');
const fs = require('fs');
const path = require('path');

const port = '4000';
const ip = 'localhost';
const staticDir = '/static';

http.createServer((req, res) => {
    const prefix = path.join(__dirname, staticDir);
    const filePath = path.join(__dirname, req.url);
    const ext = path.extname(filePath);
    const contentType = ext === '.js'
        ? 'text/javascript'
        :  ext === '.css'
        ? 'text/css'
        : 'text/html';

    const file = ext
        ? `${prefix}/${req.url}`
        : `${prefix}/index.html`;

    fs.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end();
        }
        else {
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8');
        }
    });
}).listen(port, ip, function() {
    console.info(`Server run: ${ip}:${port}`);
});