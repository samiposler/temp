var fs = require('fs')

function FileObject(){
    this.filename = '';
    this.file_exists = new function(callback) {
        var self = this;
        console.log("About to open: " + self.filename);
        fs.open(self.filename, 'r', function(err, handle) {
            if (err){
                console.log("Can't open: " + self.filename);
                callback(err);
                return;
            }
            fs.close(handle, function() {});
            callback(null, true);
        });
    };
}

var fo = new FileObject;
fo.filename = "file_that_does_not_exist";


for (var i = 0; i < 10; i++) {    
    fo.file_exists(function (err, results) {
        if (err) {
            console.log ("Aw, bummer: " + JSON.stringify(err));
            return;
        }
    });
    console.log(i);
}
