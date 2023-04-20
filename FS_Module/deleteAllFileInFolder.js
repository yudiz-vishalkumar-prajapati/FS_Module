const fs = require('fs');
try {
    function deleteFilesInFolder(sFolderPath) {
        fs.readdir(sFolderPath, function (err, aFiles) {  //read all files in folder
            if(err)console.log("Oops! You get an error in readdir",err);
            else {
                // console.log(aFiles);
                aFiles.forEach(file=>{
                    fs.unlink(`${sFolderPath}/${file}`,(err) => { //delete all files in foleder
                        if (err) console.log(err);
                        console.log(`${sFolderPath}/${file} was deleted`);
                      });
                });
            }
        });
    }
    deleteFilesInFolder('./example2');
} catch (error) {
    console.log("oops! You got an error",error);
}

//***************************************/async/****************************** */
// const fs = require('fs');
// try {
//     function deleteFilesInFolder(sFolderPath) {
//         const aFiles = fs.readdirSync(sFolderPath);
//         // console.log(aFiles);
//         aFiles.forEach(file => {
//             fs.unlinkSync(`${sFolderPath}/${file}`);
//             console.log(`./${sFolderPath}/${file} was deleted`);
//         });

//     }
//     deleteFilesInFolder('./example2');
// }
// catch (error) {
//     console.log("oops! You got an error", error);
// }

