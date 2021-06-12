import { PERSON_LOADING, PERSON_ERROR, PERSON_SET } from './personAC';

const initState={

  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  data: null,

}

function personReducer(state=initState,action) {
  switch (action.type) {

    case PERSON_LOADING: {
      let newState={
        status:1,
        data:null,
      };
      return newState;
    }

    case PERSON_ERROR: {
      let newState={
        status:2,
        data:null,
      };
      return newState;
    }

    case PERSON_SET: {
      let newState={
        status:3,
        data:action.person,
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default personReducer;
