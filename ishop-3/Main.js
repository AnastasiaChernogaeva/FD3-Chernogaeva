"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import SHOP from './shop';

var itemsArr=require('./items.json'); 

     ReactDOM.render( < SHOP shopName="Интернет-магазин NAM'S"  allItems={ itemsArr}/> , document.getElementById('container'));