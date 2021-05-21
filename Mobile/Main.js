"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/mobile.js';

let name="Velcom"; 
let clients=require('./clients.json'); 

     ReactDOM.render(   <MobileCompany 
          name={name}
          clients={clients}
        /> , document.getElementById('container'));