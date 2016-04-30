var React = require('react');

var ModelTree = React.createClass({
	propTypes: {
        showModel: React.PropTypes.bool,
        modelName: React.PropTypes.string,
    },

    render: function() {
        return (
            <div className="ModelTree">
                <p>This is ModelTree</p>
            </div>
        );
    }
});

module.exports = ModelTree;
