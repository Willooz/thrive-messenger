var MessageCounter = React.createClass({

  render: function() {
    return(
      <div className='btn btn-danger'>{this.props.count}</div>
    );
  }

});