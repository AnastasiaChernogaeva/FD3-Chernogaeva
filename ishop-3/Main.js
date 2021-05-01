"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './shop.js';

var itemsArr=require('./items.json'); 

     ReactDOM.render( <Shop shopName="Интернет-магазин NAM'S"  allItems={ itemsArr}/> , document.getElementById('container'));