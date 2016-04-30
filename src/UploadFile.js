var React = require('react');
var $ = require('jquery');

var UploadFile = React.createClass({

    // uploadFile: function() {
    //     var formobj =  document.getElementById("uploadform");
    //     var formdata = formobj.getFormData();
    //     var modelName = document.getElementById("filename").value;
    //     // this is equivalent to
    //     // var formdata = new FormData();
    //     // formdata.append('file': this.refs.uploadfile.getDOMNode().files[0]);

    //     $.ajax({
    //         url: "http://127.0.0.1:8000/MeshGen/upload",
    //         data: formdata,
    //         processData: false,
    //         contentType: false,
    //         type: "POST",
    //         success: function(modelName) {
    //         	document.getElementById('uploadfile').value = modelName;
    //             activateModelViewer(modelName);
    //         }
    //     });
    // },
    
    // Another way
    // uploadFile: function() {
    //     $(this.refs.['uploadform'].getDOMNode()).fileupload('add', {url: "myurl"});
    // },
    changeName: function(e) {
        document.getElementById('filename').value=document.getElementById('modelfile').value;
    },
    
    // for Django
    // render: function() {
    // 	return (
    //         <div className="UploadFile">
    //             <p>This is UploadFile</p>
    //             <form ref="uploadform" name="uploadform" encType="multipart/form-data" action="http://127.0.0.1:8000/MeshGen/upload/" method="POST">
    //                 <input ref="uploadfile" type="text" name="filename" id="filename"/>
    //                 <input ref="button" type="file" name="modelfile" id="modelfile" onClick={this.changeName} />
    //                 <input type='submit' value="Submit" />
    //             </form>
    //         </div>
    // 	);
    // }
    
    // for node.js
    render: function() {
        return (
            <div className="UploadFile">
                <p>This is UploadFile</p>
                <form ref="uploadform" name="uploadform" encType="multipart/form-data" action="/MeshGen/upload/" method="POST">
                    <input ref="uploadfile" type="text" name="filename" id="filename"/>
                    <input ref="button" type="file" name="modelfile" id="modelfile" onClick={this.changeName} />
                    <input type='submit' value="Submit" />
                </form>
            </div>
        );
    }
    
});

module.exports = UploadFile;
