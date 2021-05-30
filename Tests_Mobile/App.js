
"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/mobile.js';

let clients=require('./clients.json'); 

     ReactDOM.render(   <MobileCompany 
          clients={clients}
        /> , document.getElementById('container'));