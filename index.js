var fs = require('fs');

fs.readdir('./test', function(err, files) {
    if (err) throw err
    console.log('In the folder are following files: ');
    console.log(files);
    fs.writeFile('./test.txt', files, function(err, data) {
        if (err) throw err
        console.log('Data saved to file.');
    });
});