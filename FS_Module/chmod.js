// Node.js program to demonstrate the
// fs.chmod() method
  
// Import the filesystem module
const fs = require('fs');
  
// Grant only read permission to user

// for read only access : 0o400
// for read and write : 0o600

/*
7 — Read, write, and execute
6 — Read and write
5 — Read and execute
4 — Read-only
3 — Write and execute
2 — Write-only
1 — Execute only
0 — No permission
//
*/
// https://www.oreilly.com/library/view/mastering-nodejs/9781785888960/e45266d3-c4a6-4256-9ee6-4bab8f869c73.xhtml
console.log("only read access to user");
  
fs.chmod("file1.txt", 000, () => {
try {
  console.log("\nReading the file contents");
  console.log(fs.readFileSync("file1.txt", 'utf8'))
   fs.writeFileSync('file1.txt', "This file has now been edited1111111.");
  }
  catch (e) {
    console.log("Error Code:", e.code);
  }
})