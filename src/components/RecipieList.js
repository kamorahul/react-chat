import React from 'react';
var  RecipieList  = React.createClass({
  getInitialState :function () {
      return {isOpen : false};
  },
  handleClick : function () {
      console.log("Hello")
      this.setState({isOpen : !this.state.isOpen})
  },
  renderDropDown:function () {
    return (
        <div>
          open silde
        </div>
    )


  },

  render : function(){
    var openData = this.state.isOpen ?  this.renderDropDown(): null;

    return (
        <div onClick={this.handleClick}>
          its a clickable list
          {openData}
        </div>
    )

  }
})


export default  RecipieList