var Message = React.createClass({

  render: function() {
    return(
      <tr>
        <td>{this.props.message.user_id}</td>
        <td>{this.props.message.text}</td>
        <td>{this.props.message.date}</td>
        <td>{this.props.message.delivery}</td>
      </tr>
    );
  }

});
