//this file is only one time give the correct solution 
//because we change the permmission to Read-only 
try {
    const fs = require('fs');
    
    function readfile(sFilePath) {
        const sContent = fs.readFileSync(sFilePath, 'utf8');
        return sContent;
    }
    function writeFile(sFilePath, sContent) {
        fs.writeFileSync(sFilePath, sContent);
        console.log('write operation is completed');
    
    }
    function appending(sFilePath, sContent) {
        fs.appendFileSync(sFilePath, sContent);
        console.log('append operation is completed');
    }
    function chmod(sFilePath) {fs.chmodSync(sFilePath, 0o400);}
    
    const sFilePath = './text.txt';
    const sContent = "Environment variables provide information about the environment in which the process is running."
    const sAppendContent = "Environment variables store data that's used by the operating system and other programs."
    console.log("Reading file ::", sFilePath);
    console.log("File content is this");
    console.log(readfile(sFilePath));           //call the read function
    console.log('write to file ', sFilePath);
    // writeFile(sFilePath, sContent);             //call the write function
    console.log('file content after write');
    console.log(readfile(sFilePath));           //call the read function
    console.log('appending content to the file');
    // appending(sFilePath, sAppendContent);       //call the append function 
    console.log(readfile(sFilePath));           //call the read function
    console.log('change file permission to read only');
    chmod(sFilePath);
    console.log('trying to write content in file')
    writeFile(sFilePath, sContent);             //call the write function
    
} catch (error) {
    console.log("!Oops You got an error",error.message);
}