var React = require("react");

var Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos:    React.PropTypes.array.isRequired
  },
  render: function() {
    console.log("BIO", this.props.bio);
    return(
      <div>
        <p>Repos!</p>
      </div>
    )
  }
});

module.exports = Repos;
