import { combineReducers } from 'redux';

import personReducer from "./personReducer";

let combinedReducer=combineReducers({
    person: personReducer, // редьюсер countriesReducer отвечает за раздел state под именем countries
    // + другие редьюсеры
});

export default combinedReducer;