import React, { Component } from 'react';

import './App.css';

var Checkbox = React.createClass({
  render: function(){
    let msg;
     if(this.state.checked){
       msg ="Checked"
     }else {
       msg ="UnChecked"
     }
    return(
      <div>
      <input type="checkbox" onChange={this.handleCheck}/>
      <p>This bos is: {msg}</p>
      </div>
    );
  },

  getInitialState: function(){
    return {checked: false}
  },

  handleCheck: function(){
    //this.state.checked = true
    this.setState({checked: !this.state.checked})
  }

});
/*
class Checkbox extends Component{
render(){
  return(
    <div>
    <input type="checkbox" onChange={this.handleCheck}/>
    <p></p>
    </div>
  );
}

getInitialState(){
  return {checked: true}
}

handleCheck(){
  //this.state.checked = true
  this.setState({checked: !this.state.checked})
}

}
*/
export default Checkbox;
