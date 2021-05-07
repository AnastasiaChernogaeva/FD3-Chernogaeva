"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Cover from './cover.js';
let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render( <Cover colors={colors} text="Hello!">  </Cover> , document.getElementById('container') );