var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

// http.createServer(function(request, response) {
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("hello world");
// 	response.end();
// }).listen(8000);
// cosole.log("Server has started.");

var upload = multer({ dest: path.join(__dirname, '/uploads')});

var app = express();

app.set('port', (process.env.PORT || 8000));

app.use(bodyParser());
app.use(bodyParser.json());
app.use(serveStatic(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true}));

var COMMENTS_FILE = path.join(__dirname, '/static/ModelInfo.json');

app.get('/MeshGen', function(request, response) {
	response.redirect('/views/MeshGenMainView.html');
});

app.post('/MeshGen/upload', upload.single('modelfile'), function(request, response) {
	fs.exists(COMMENTS_FILE, function(exists) {
		if (exists) {
			fs.readFile(COMMENTS_FILE, function(err, data) {
        	    if (err) {
        		    console.log('line 36');
        		    console.error(err);
        		    process.exit(1);
        	    }

                var modelInfo =  JSON.parser(data);
        	    var newmodelInfo = {
        		    name: request.body.filename,
        	    };

        	    modelInfo.push(newmodelInfo);

        	    fs.writeFile(COMMENTS_FILE, JSON.stringify(modelInfo, null, 4), function(err) {
        		    if (err) {
        			    console.log('line 50');
        			    console.error(err);
        			    process.exit(1);
        		    }
        	    });

            });
		}
		else {
			fs.open(COMMENTS_FILE, 'w', function(err) {
        	    if (err) {
        		    console.log('line 62');
        		    console.error(err);
        		    process.exit(1);
        	    }

        	    var newmodelInfo = {
        		    name: request.body.filename,
        	    };
        	    var modelInfo = [];

        	    modelInfo.push(newmodelInfo);

        	    fs.writeFile(COMMENTS_FILE, JSON.stringify(modelInfo, null, 4), function(err) {
        		    if (err) {
        			    console.log('line 76');
        			    console.error(err);
        			    process.exit(1);
        		    }
        	    });
            });
		}
	});
    
    var tmp_path = request.file.path;
    var target_path = path.join(__dirname, '/static/models/', request.body.filename);
    fs.rename(tmp_path, target_path, function() {
        fs.unlink(tmp_path, function() {
        	response.redirect('/views/MeshGenMainView.html');
        });
    });
});

app.get('/MeshGen/api/model', function(request, response) {
    fs.exists(COMMENTS_FILE, function(exists) {
        if (exists) {
        	fs.readFile(COMMENTS_FILE, function(err, data) {
                if (err) {
    	            console.log('line 99');
                    console.error(err);
                    process.exit(1);
                }
                response.json(JSON.parse(data));
            });
        }
    }); 
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
