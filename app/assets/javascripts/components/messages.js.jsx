var Messages = React.createClass({

  getInitialState: function() {
    return {
      user: this.props.data.user,
      messages: this.props.data.messages
    };
  },

  getDefaultProps: function() {
    return { user: 'Unauthenticated User', messages: [] };
  },

  counter: function() {
    return this.state.messages.length;
  },

  addMessage: function(message) {
    var messages = React.addons.update(this.state.messages, { $push: [message] });
    this.setState({ messages: messages });
  },

  deleteMessage: function(message) {
    var index = this.state.messages.indexOf(message);
    var messages = React.addons.update(this.state.messages, { $splice: [[index, 1]] });
    this.setState({ messages: messages });
  },

  render: function() {
    return(
      <div className='records'>
        <h2 className='title'>Messages</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Author</th>
              <th>Text</th>
              <th>Time</th>
              <th>Delivery</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.messages.map(function(message) {
              return <Message key={message.id} message={message} handleDeleteMessage={this.deleteMessage} />
             }.bind(this))}
          </tbody>
        </table>
        <MessageCounter count={this.counter()} />
        <MessageForm user={this.state.user} handleNewMessage={this.addMessage} />
      </div>
    );
  }

});