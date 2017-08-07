var fs = require('fs');

fs.readdir('./test', function(err, files){
    files.forEach(function(file){
        console.log(file);
        fs.appendFile('./text.txt', file, function(err){
            if (err) throw err;
            console.log('The file has been saved!')
        });
    });
});