import React from 'react';


var DevInCompany = React.createClass({
    render: function() {
        return (
            <h1>
                { this.props.message }
            </h1>
        )
    }
});



React.render(<DevInCompany  message="oi dev in company!" />, document.getElementById('root'));
