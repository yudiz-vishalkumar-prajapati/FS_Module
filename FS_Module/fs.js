// const fs = require('fs');
/*******************read file start***************** */

//async read file
// fs.readFile('./example.js','utf-8',function(err,data){
//     console.log(data)
// })


//sync read file
//buffer example
//let readDataBuffer = fs.readFileSync('./example.js')
//console.log(readDataBuffer)

//let readDataUtfEncoding = fs.readFileSync('./example.js','utf-8')
//console.log(readDataUtfEncoding)

//console.log("ye third hai")
/*******************read file ends here***************** */






/*******************write file start***************** */
//write file synchronus
//fs.writeFileSync('./new-file-created.js',"bhavin")

//write file async
// fs.writeFile('./exampele-one.js','bhavin-again',function(err){
//  console.log(err)
// })

// append file content
// home work
// fs.writeFile('./example-one.js','bhavin-apppend',{
//     flag:''
// },function(err){
//     console.log(err)
// })
/*******************write file ends here***************** */





/*******************append file start here***************** */

//home work: try with other flag other than  w, does any flag other flag provided

//append file async
// fs.appendFile('./exampe.js','this is my append text',function(err){
//     console.log(err)
// })

//append file sync
//fs.appendFileSync()
/*******************append file ends here***************** */






/*******************rename file starts here***************** */
//rename a file
// fs.rename('./exampe.js','./new-example.js',function(err){
//     console.log(err)
// })
/*******************rename file ends here***************** */





/*******************delete file starts here***************** */
//delete file
//let fileDeleted = fs.unlinkSync('./example.js')
// console.log(fileDeleted)


//delete file async
// fs.unlink('./example-one.js',function(err){
//     console.log(err)
// })
//home work: delete file if it exists manage error
/*******************rename file ends here***************** */



/*******************read diretory file starts here***************** */
//read directory
// fs.readdir('./example-folder',{
//     withFileTypes:true
// },function(err,files){
//    console.log(files)
// })

//home work: create example-folder put three file in it.
// name of the file a.txt, b.txt, c.js
// print only js file, with out using any package and with using package


//let data = fs.readdirSync('./example-folder');
//console.log("data");
//console.log(data);

/*******************read diretory file ends here***************** */


//create directory
//delete directory



//watch a file

// const fs = require('fs');
// function watchAFile(file) {
//   fs.watch(file, (event, filename) => {
//     console.log(`${filename} file Changed`);
//   });
// }
// watchAFile('./new-example.js')


