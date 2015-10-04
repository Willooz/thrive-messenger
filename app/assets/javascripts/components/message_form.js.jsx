var MessageForm = React.createClass({

  getInitialState: function() {
    return {
      author: '',
      text: ''
    };
  },

  handleChange: function(event) {
    this.setState({ text: event.target.value });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    $.post('',
      { message: this.state },
      function(data) {
        this.props.handleNewMessage(data);
        this.setState(this.getInitialState());
      }.bind(this),
      'JSON'
    );
  },

  valid: function() {
    return (this.state.text);
  },

  render: function() {
    return(
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input type='text' className='form-control'
            placeholder='Type here...' name='text'
            value={this.state.text} onChange={this.handleChange}>
          </input>
        </div>
        <div className='form-group'>
          <input type='submit' className='btn btn-primary'
            value='Send' disabled={!this.valid()}>
          </input>
        </div>
      </form>
    );
  }

});