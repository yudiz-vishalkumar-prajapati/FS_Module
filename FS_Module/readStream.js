const fs=require('fs');
try {
const readStream=fs.createReadStream('./demo.txt');
readStream.on("data",chunk=>{
    console.log("New data fetched******************************************************************************");
    console.log(chunk);
});   
} catch (error) {
    console.log(error);
}