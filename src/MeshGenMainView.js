var React = require('react');
var ReactDOM = require('react-dom');
var UploadFile = require('./UploadFile');
var ModelTree = require('./ModelTree');
var MeshMenu = require('./MeshMenu');
var ModelViewer = require('./ModelViewer')

var MeshGenMainView = React.createClass({

    render: function() {
		return (
            <div className="MeshGenMainView">
                <UploadFile />
                <ModelTree url="/MeshGen/api/model" />
                <MeshMenu />
                <ModelViewer url="/MeshGen/api/model" />
            </div>
        );
    }
});

ReactDOM.render(
	<MeshGenMainView />,
	document.getElementById('content')
);
