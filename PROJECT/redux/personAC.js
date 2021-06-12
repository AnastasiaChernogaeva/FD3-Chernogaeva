const PERSON_LOADING='PERSON_LOADING';
const PERSON_ERROR='PERSON_ERROR';
const PERSON_SET='PERSON_SET';

const personLoadingAC=function() {
  return {
    type: PERSON_LOADING,
  };
}

const personErrorAC=function() {
  return {
    type: PERSON_ERROR,
  };
}

const personSetAC=function(person) {
  return {
    type: PERSON_SET,
    person:person,
  };
}

export {
    personLoadingAC,PERSON_LOADING,
    personErrorAC,PERSON_ERROR,
    personSetAC,PERSON_SET,
}
