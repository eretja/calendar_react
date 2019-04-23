var fs = require('fs');
var path = require('path')
var fs = require('fs');

var walkPath = './src/components';


var walk = function (dir, done) {
    fs.readdir(dir, function (error, list) {
        if (error) {
            return done(error);
        }

        var i = 0;

        (function next () {
            var file = list[i++];

            if (!file) {
                return done(null);
            }
            
            file = dir + '/' + file;
            
            fs.stat(file, function (error, stat) {
        
                if (stat && stat.isDirectory()) {
                    walk(file, function (error) {
                        next();
                    });
                } else {
                    // do stuff to file here
                    // console.log(file, path.extname(file));
                    var filename = path.basename(file);

                    if ( path.extname(file) === '.jsx' && !filename.includes('.test.jsx') ) {
                       

                        var name = filename.substr(0, filename.lastIndexOf('.'));
                        var nameOrg = name;
                        name  = name.substring(0, 1).toLowerCase() + name.substring(1, name.length) ;
                        var mdPath = path.dirname(file) + '/' + name + '.md';
                        // console.log( 'file with .jsx', filename, name);
                        if (!fs.existsSync(mdPath)) {
                            var code = 
                            '\`\`\`js\n' +
                            '<' + nameOrg + ' />\n' +
                            '\`\`\`';
                            
                            console.log( 'code', code, name, 'path:', mdPath);
                            
                            fs.writeFile(mdPath, code, function (err) {
                                if (err) return console.log(err);
                                console.log(name + '.md' + ' is written with content:', code);
                              });
                        }

                    }
                    

                    next();
                }
            });
        })();
    });
};

// optional command line params
//      source for walk path
process.argv.forEach(function (val, index, array) {
    if (val.indexOf('source') !== -1) {
        walkPath = val.split('=')[1];
    }
});

console.log('-------------------------------------------------------------');
console.log('processing...');
console.log('-------------------------------------------------------------');

walk(walkPath, function(error) {
    if (error) {
        throw error;
    } else {
        console.log('-------------------------------------------------------------');
        console.log('finished.');
        console.log('-------------------------------------------------------------');
    }
});