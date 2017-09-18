import React, { Component } from 'react';

import './App.css';

var Menu = React.createClass({
  propTypes:{
    count:function(props,propName){
        if(typeof props[propName] !== "number"){
          return new Error("the prop must be a number");
        }
        if(props[propName] > 100){
          return new Error("Can't be more than 100");
        }
    }
  },
  render: function(){
    return <div>{this.props.count}</div>
  }
});


export default Menu;
