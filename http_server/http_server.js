'use strict'

const   http    = require( 'http' )

const   host    = 'localhost'
,       port    = 8000
;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("<h1>My first server!</h1>");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});