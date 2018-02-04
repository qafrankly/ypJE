import React, { Component, PropTypes } from 'react'; 
var $ = require('jQuery'); 
require('./app.js'); 
class RandomTest extends Component { 
  static PropTypes = { 
    h1: PropTypes.string, 
    h2: PropTypes.string, 
  } 
  render(){ 
    let { 
      h2 = 'sup this a github edit', 
    } = this.props; 

    let { 
      flux, config 
    } = this.context; 

    return ( 
      <div> 
        <h2>{h2}</h2> 
      </div> 
    ); 
  } 
} 

export default RandomTest;