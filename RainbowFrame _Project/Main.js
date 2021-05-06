"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainBowFrame from './RainBowFrame.js';
let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render( <RainBowFrame colors={colors} text="Hello!">  </RainBowFrame> , document.getElementById('container') );