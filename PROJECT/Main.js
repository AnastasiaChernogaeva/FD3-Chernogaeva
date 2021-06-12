"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home.js';

var goods=require('./items.json'); 

     ReactDOM.render( <Home shopName="ЧерАС"  goods={goods}/> , document.getElementById('container'));