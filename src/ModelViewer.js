var React = require('react');
var $ = require('jquery');

var ModelViewer = React.createClass({
	propTypes: {
        url: React.PropTypes.string,
    },
    
    getInitialState: function() {
    	return {
    		showModel: false,
    		modelName: "",
    	}
    },

    fetchModelInfo: function() {
        $.ajax({
        	url: this.props.url,
        	dataType: 'json',
        	cache: 'false',
        	success: function(data) {
        	    this.setState({
        	    	showModel: true,
        	    	modelName: data[data.length-1].name,
        	    })
        	}.bind(this)
        });
    },

    componentDidMount: function() {
    	this.fetchModelInfo();
    },

    // render: function() {
    //     if (this.state.showModel) {
    //     	return (
    //             <div className="ModelViewer">
    //                 <p>This is ModelViewer (loaded)</p>
    //                 <p>{this.state.showModel}</p>
    //                 <p>{this.state.modelName}</p>
    //                 <x3d>
    //                     <scene>
    //                         <viewpoint position="-1.94639 1.79771 -2.89271" orientation="0.03886 0.99185 0.12133 3.75685"></viewpoint>
    //                         <Inline url={"127.0.0.1:8000/media/" + this.state.modelName} />
    //                     </scene>
    //                 </x3d>
    //             </div>
    //         );
    //     }
    //     else {
    //     	return (
    //             <div className="ModelViewer">
    //                 <p>This is ModelViewer (not loaded)</p>
    //                 <p>{this.state.showModel}</p>
    //                 <p>{this.state.modelName}</p>
    //             </div>
    //     	);
    //     }
    // }
    
    // Django
    // render: function() {
    // 	var fileurl = 'http://127.0.0.1:8000/media/' + this.state.modelName;
    // 	var test = '<inline url="' + fileurl + '"></inline>';
    // 	if (test === '<inline url="http://127.0.0.1:8000/media/yf17.x3d"></inline>') {
    //         var message = "true";
    // 	}
    // 	var x3d_html = ''
    // 	    + '<x3d width="600px" height="600px">'
    //             + '<scene>'
    //                 + '<viewpoint></viewpoint>'
    //                 + test
    //             + '</scene>'
    //         + '</x3d>';

    // 	return (
    //         <div className="ModelViewer">
    //             <p>This is ModelViewer (loaded)</p>
    //             <p>{message}</p>
    //             <p>{x3d_html}</p>
    //             <div dangerouslySetInnerHTML={{__html: x3d_html}} />
    //         </div>
    //     );
    // }
    
    // Node.js
    render: function() {
        if (this.state.showModel == true) {
            var message = "true";
            
        }
        else {
            var message = "false";
        }
        
        var aaa = this.state.modelName;
        // var modelname = String.fromCodePoint(aaa[1].codePointAt());
        // for (var i = 1; i < (this.state.modelName.length-1); i++) {
        //     modelname += String.fromCodePoint(aaa[i].codePointAt());
        // }
        

        var test = String.fromCodePoint(121)+ String.fromCodePoint(102) + String.fromCodePoint(49)
                 + String.fromCodePoint(55) + String.fromCodePoint(46) + String.fromCodePoint(120)
                 + String.fromCodePoint(51) + String.fromCodePoint(100);

        test2 = 'yf17.x3d';
     
        var x3d_html = ''
            + '<x3d width="600px" height="600px">'
                + '<scene>'
                    + '<viewpoint></viewpoint>'
                    + '<inline url="/models/' + test2 + '"></inline>'
                + '</scene>'
            + '</x3d>';

        return (
            <div className="ModelViewer">
                <p>This is ModelViewer (loaded)</p>
                <p>{message}</p>
                <p>{typeof(this.state.modelName)}</p>
                <p>{this.state.modelName[0]}</p>
                <p>{aaa[1].codePointAt()}</p>
                <div dangerouslySetInnerHTML={{__html: x3d_html}} />
            </div>
        );
    }

});

module.exports = ModelViewer;
