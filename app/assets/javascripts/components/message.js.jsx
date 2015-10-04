var Message = React.createClass({

  handleDelete: function(event) {
    $.ajax({
      method: 'DELETE',
      url: '/messages/' + this.props.message.id,
      dataType: 'JSON',
      success: function() {
        this.props.handleDeleteMessage(this.props.message)
      }.bind(this)
    });
  },

  render: function() {
    return(
      <tr>
        <td>{this.props.message.user_id}</td>
        <td>{this.props.message.text}</td>
        <td>{this.props.message.date}</td>
        <td>{this.props.message.delivery}</td>
        <td><a className='btn btn-danger' onClick={this.handleDelete}>Delete</a></td>
      </tr>
    );
  }

});
