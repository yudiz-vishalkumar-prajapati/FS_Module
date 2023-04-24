const EventEmitter = require('events');
const http=require('http');
require('dotenv').config();
const eventEmitter = new EventEmitter();
const port = process.env.PORT;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    let data='';
    req.on('data', (chunk) => {
        data+=chunk
    });
    req.on('end', () => {
        
        function add(nNum1,nNum2) {
            res.end(`result ${(+nNum1) + (+nNum2)}`);
        }
        function sub(nNum1,nNum2) {
            res.end(`result ${Math.abs(nNum1 -nNum2)}`);
        }
        function div(nNum1,nNum2) {
            res.end(`result ${Math.floor(nNum1/nNum2)}`);
        }
        function mul(nNum1,nNum2) {
            res.end(`result ${nNum1 * nNum2}`);
        }
        const {nNum1, nNum2}=JSON.parse(data);
        eventEmitter.on('add',add);
        eventEmitter.on('sub',sub);
        eventEmitter.on('div',div);
        eventEmitter.on('mul',mul);
        switch (req.url) {
            case '/add':
                eventEmitter.emit('add',nNum1,nNum2);
                break;
            case '/sub':
                eventEmitter.emit('sub',nNum1,nNum2);
                break;
            case '/mul':
                eventEmitter.emit('mul',nNum1,nNum2);
                break;
            case '/div':
                eventEmitter.emit('div',nNum1,nNum2);
                break;
            default:
                break;
        }
    });
    
});
server.listen(port, (err)=>{
if(err) console.error(err);
else console.log('listening on port',port);
});