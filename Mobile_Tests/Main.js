"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/mobile.js';

let clients=[  {"id":0, "f":"Иванов ", "n":"Иван", "MN":"Иванович", "balance":200},  {"id":1, "f":"Сидоров .", "n":"Сидор", "MN":"Сидорович", "balance":250},  {"id":2, "f":"Петров ", "n":"Петр", "MN":"Петрович", "balance":180},   {"id":3, "f":"Григорьев ", "n":"Григорий", "MN":"Григорьевич", "balance":-220}]; 

     ReactDOM.render(   <MobileCompany  clients={clients} /> , document.getElementById('container'));