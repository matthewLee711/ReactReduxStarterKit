import React from 'react';
import ReactDOM from 'react-dom';
//Test components

var TestApp = React.createClass( {
  render: function() {
    return (
      <div>Yo</div>
    )
  }
});



ReactDOM.render(<TestApp />, document.getElementById('app'));
