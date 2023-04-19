//***********************************/async function/*********************************** */
// const fs=require('fs');
// try {
//     function WriteContent(sFileName,sContent) {
//         fs.writeFile(sFileName,sContent,(err)=>{
//             if(err)console.log("Oops...",err);
//         });
//     }
//     WriteContent('./demo.txt',"this is the demo file.");
//     // if demo.txt doesn't exist then it create new file
//     //otherwise it replace the exist file 
// } catch (error) {
//     console.log(error)
// }

//**********************************/sync function/************************************* */

const fs = require('fs');
try {
    function WriteContent(sFileName, sContent) {
        fs.writeFileSync(sFileName, sContent);
    }
    WriteContent('./demo.txt', "this is the demo file.");
    // if demo.txt doesn't exist then it create new file
    //otherwise it replace the exist file 
} catch (error) {
    console.log(error)
}