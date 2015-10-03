var Messages = React.createClass({

  getInitialState: function() {
    return { messages: this.props.data };
  },

  getDefaultProps: function() {
    return { messages: [] };
  },

  render: function() {
    return(
      <div className='records'>
        <h2 className='title'>
          Messages
        </h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.messages.map(function(message) {
              return <Message key={message.id} message={message} />
             }.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }

});