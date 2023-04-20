const http = require('http');
let add = require('./add.js');
const sub = require('./sub.js');
const mul = require('./mul.js');
const div = require('./div.js');

const server = http.createServer((req, res) => {
    let data = '';
    let result;
    req.on('data', (chunk) => {
        data += chunk
    })
    req.on('end', () => {
        const parsed = JSON.parse(data);
        let nNum1 = parsed.num1;
        let nNum2 = parsed.num2;
        switch (req.url) {
            case '/add':
                result = add(nNum1, nNum2);
                console.log(result);
                break;
            case '/sub':
                result = sub(nNum1, nNum2);
                console.log(result);
                break;
            case '/div':
                result = div(nNum1, nNum2);
                console.log(result);
                break;
            case '/mul':
                result = mul(nNum1, nNum2);
                console.log(result);
                break;
            default:
                result = {
                    statusCode: 404,
                    message: 'Not Found'
                }
                break;
        }
    })
    res.end(`hosted`);
});
server.listen(8080, (err) => {
    if (err) console.log(err);
    else {
        console.log('listening on port no 8080');
    }
});