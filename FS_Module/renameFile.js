// const fs=require('fs');
// try {
//     function rename(sCurrentFileName,sNewFileName) {
        
//         fs.rename(sCurrentFileName,sNewFileName,function(err){
//             if(err)console.log(err);
//         });
//     }
//     rename('../demo.txt','./new-example.js')
// } catch (error) {
//     console.log(error)
// }
//if file is not exist it will throw error [Error: ENOENT: no such file or directory


//***************************************/sync/*************************************** */
// const fs=require('fs');
// try {
//     function rename(sCurrentFileName,sNewFileName) {
//         fs.renameSync(sCurrentFileName,sNewFileName)
//     }
//     rename('./new-example.js','./demo.txt');
////**You can use rename function as a move file one location to other location.**
// } catch (error) {
//     console.log(error)
// }