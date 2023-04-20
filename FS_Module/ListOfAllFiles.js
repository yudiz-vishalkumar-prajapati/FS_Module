const fs = require('fs');
try {
    function filesList(sFilePath) {
        fs.readdir(sFilePath, {withFileTypes: true}, function (err, files) {
            if(err)console.log("Oops! You get an error in readdir",err);
            else console.log(files);
        });
    }
    filesList('./example1');
} catch (error) {
    console.log("oops! You got an error",error);
}

// it is provide a undefined if any filename is note exist

//with this it give ==>
// [
//   Dirent { name: 'ListOfAllFiles.js', [Symbol(type)]: 1 },
//   Dirent { name: 'task-info.txt', [Symbol(type)]: 1 }
// ]
//******************************************************************************** */
// fs.readdir('../fs module',
// function(err,files){
//    console.log(files)
// });

// without {withFileTypes:true} as second argument is give output==>
// [ 'ListOfAllFiles.js', 'task-info.txt' ]

//**********************************/sync function/*************************************************** */
// const fs = require('fs');
// try {
//     function filesList(filename) {
//         const files=fs.readdirSync(`./${filename}`,{withFileTypes:true});
//         console.log(files);
//     }
//     filesList('example1');
// } catch (error) {
//     console.log("oops! You got an error",error.message);
// }