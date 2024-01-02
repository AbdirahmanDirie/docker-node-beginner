const http = require('http')
const _ = require('lodash')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const max = _.max(numbers);
    res.end("hello, I am docker in NodeJS: " + max);
})


server.listen(3000);