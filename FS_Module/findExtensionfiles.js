const fs = require('fs');
try {
    function filesList(sFilePath, sExtension) {
        fs.readdir(sFilePath, function (err, aFiles) {
            if (err) console.log("Oops! You get an error in readdir", err);
            else {
                const aFiltered=aFiles.filter(file => file.endsWith(sExtension))
                console.log(aFiltered)
            }
        })
    }
    filesList('./example1','.js');
} catch (error) {
    console.log("oops! You got an error", error);
}