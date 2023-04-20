// const fs = require('fs');

// try {
//   function createFolder(folderName) {
//     fs.mkdir(folderName, { recursive: true }, function (err, path) { 
//       if (err) console.log(err);
//       else console.log(path);
//     });
//   }
//   function deleteFolder(folderName){
//     fs.rmdir(folderName, { recursive: false,force: true }, function (err) { 
//       if(err)console.log(err);
//     });
//   }
//   // createFolder('./Example2'); 
//   deleteFolder('./Example2');
// } catch (error) {
//   console.log(error);
// }
//if we use { recursive: true } then we don't get error if folder is exist.

////////////////////* sync createfile*/////////////////////////////


// const fs = require('fs');

// try {
//   function createFolder(folderName) {
//     const path = fs.mkdirSync(folderName, { recursive: true });
//     console.log(path);
//   }
//   function deleteFolder(folderName) {
//     const path = fs.rmdirSync(folderName, { recursive: true, force: true });
//     // console.log(path); //it logs undefined 
//   }
//   // createFolder('./Example3');
//   deleteFolder('./Example3');
// } catch (error) {
//   console.log("!Oops..", error);
// }