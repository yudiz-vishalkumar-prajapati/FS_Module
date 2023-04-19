const fs=require('fs');
try {
const readStream=fs.createReadStream('./demo.txt');
const writeStream=fs.createWriteStream('./demo1.txt');
readStream.on("data",chunk=>{
    console.log("New data fetched******************************************************************************");
    writeStream.write(chunk);
    console.log("Chunk written to the new text file");
});   
} catch (error) {
    console.log(error);
}