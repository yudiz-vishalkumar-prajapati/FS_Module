//****************************/async function/***************************************** */
// const fs=require('fs');
// try {
//     function readText(sFileName) {
//         fs.readFile(sFileName,'utf-8',(err,sText)=>{
//             if(err)console.log("!Oops ...",err);
//             else console.log(sText);
//         });
//     }
//     readText('./environmentVariable.txt'); // enter the path of your file with file name
// } catch (error) {
//     console.log(error);
// }
//*******************************/sync function/************************************** */
// const fs=require('fs');

// try {
//     function readText(sFileName) {
//         const sText=fs.readFileSync(sFileName,'utf-8');
//         console.log(sText);
//     }
//     readText('./environmentVariable.txt');
// } catch (error) {
//     console.log("Oops...",error);
// }