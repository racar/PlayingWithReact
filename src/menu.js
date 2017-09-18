import React, { Component } from 'react';

import './App.css';
import Dish from './dish';

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
  getInitialState: function(){
      return{
        dishes: [
          "Quinoa burgers",
          "Lentils and rise",
          "Falafel"
        ]
      }
  },
  render: function(){
    return (<div>
            {this.state.dishes.map(function(dish,i){
              return (
                <Dish key={i}>{dish}</Dish>
              );
            })}
            </div>);
  }
});


export default Menu;
