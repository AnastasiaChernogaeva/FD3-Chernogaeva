"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import CoverRB from './Cover';


        
ReactDOM.render( <CoverRB caption1="Нажми меня(1)" caption2="Нажми меня(2)"  cbPressed={ num => alert(num) }/>  , document.getElementById('container') );