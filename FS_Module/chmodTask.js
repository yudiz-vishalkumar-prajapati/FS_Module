const fs=require('fs');

fs.chmod('demo1.js',0o444,()=>{
try {
    fs.writeFileSync('demo1.js',"//change the text in file!!!!!!");
    const data=fs.readFileSync('demo1.js','utf-8');
    console.log(data)
} catch (error) {
    console.log("err",error);
}
});