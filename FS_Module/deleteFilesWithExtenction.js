const fs = require('fs');
try {
    function filesList(sFolderPath, sExtension) {
        fs.readdir(sFolderPath, function (err, aFiles) {
            if (err) console.log("Oops! You get an error in readdir", err);
            else {
                const aFiltered=aFiles.filter(file => file.endsWith(sExtension))
                aFiltered.forEach(file=>{
                    fs.unlink(`${sFolderPath}/${file}`,(err) => { //delete all files in foleder
                        if (err) console.log(err);
                        console.log(`${sFolderPath}/${file} was deleted`);
                      });
                });
            }
        })
    }
    filesList('./example2','.js');
} catch (error) {
    console.log("oops! You got an error", error);
}