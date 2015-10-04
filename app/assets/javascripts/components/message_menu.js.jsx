var MessageMenu = React.createClass({

  getInitialState: function() {
    return { active: false };
  },

  handleClick: function(event) {
    this.setState({active: !this.state.active});
    this.props.handleNewClick(this.props.type).bind(this);
  },

  render: function() {
    var menuClass = this.state.active ? 'active btn-primary' : 'inactive btn-default';
    return(
      <li><a href='#' className={menuClass} onClick={this.handleClick}>{this.props.type}</a></li>
    );
  }

});