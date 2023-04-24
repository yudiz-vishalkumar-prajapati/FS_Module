const http = require("http");
require("dotenv").config();
const fs = require("fs");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  const parsed = JSON.parse(fs.readFileSync("database.json", "utf8"));
  const database = parsed.database;
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    eventEmitter.on("add", fAdd);
    eventEmitter.on("update", fUpdate);
    eventEmitter.on("delete", fDelete);
    eventEmitter.on("get", fGet);
    function fGet() {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(database));
    }
    function fDelete(id) {
      const index = database.findIndex(object => object.id === id);
      if (index !== -1) {
        database.splice(index, 1);
        fs.writeFileSync("database.json", JSON.stringify(parsed));
        return res.end(`id:${id} deleted`);
      }
      else return res.end('id is not found');
    }
    function fUpdate(id, sProduct, nPrise) {
      const index = database.findIndex(object => object.id === id);
      if (index !== -1) {
        database[index].sProduct = sProduct;
        database[index].nPrise = nPrise;
        fs.writeFileSync("database.json", JSON.stringify(parsed));
        return res.end(`id:${id},updatedProduct:${sProduct},updatedPrise:${nPrise}`);
      }
      else return res.end('id is not found');
    }
    function fAdd(id, sProduct, nPrise) {
      database.push({ id, sProduct, nPrise });
      fs.writeFileSync("database.json", JSON.stringify(parsed))
      res.write("product is added to database")
      return res.end(`id:${id} ,Product:${sProduct} ,Prise:${nPrise}`);
    }
    const { id, sProduct, nPrise } = JSON.parse(data);
    switch (req.url) {
      case "/add":
        eventEmitter.emit("add", id, sProduct, nPrise);
        break;
      case "/update":
        eventEmitter.emit("update", id, sProduct, nPrise);
        break;
      case "/delete":
        eventEmitter.emit("delete", id);
        break;
      case "/get":
        eventEmitter.emit("get");
        break;
      default:
        res.write("you are in home page");
        res.write("use /add for add product");
        res.write("use /update for update product");
        res.write("use /delete for delete product");
        return res.end("use /get for get all product");
        break;
    }
  });
});

server.listen(port, (err) => {
  if (err) console.log(err);
  else console.log("listening on port no", port);
});