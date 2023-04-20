// const fs=require('fs');
// try {
//     function rename(sCurrentFilePath,sNewFilePath) {
        
//         fs.rename(sCurrentFilePath,sNewFilePath,function(err){
//             if(err)console.log(err);
//         });
//     }
//     rename('./demo.txt','./Example1/demo.txt');
// } catch (error) {
//     console.log(error)
// }
//if file is not exist it will throw error [Error: ENOENT: no such file or directory


//***************************************/sync/*************************************** */
// const fs=require('fs');
// try {
//     function rename(sCurrentFilePath,sNewFilePath) {
//         fs.renameSync(sCurrentFilePath,sNewFilePath);
//     }
//     rename('./Example1/demo.txt','./demo.txt');
// //**You can use rename function as a move file one location to other location.**
// } catch (error) {
//     console.log(error)
// }