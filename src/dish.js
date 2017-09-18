import React, { Component } from 'react';

import './App.css';

var Dish = React.createClass({

  render: function(){
    return (<div>
      <textarea defaultValue={this.props.children}></textarea>
    </div>);
  }
});


export default Dish;
