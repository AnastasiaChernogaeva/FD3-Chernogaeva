import isoFetch from 'isomorphic-fetch';

import { personLoadingAC, personErrorAC, personSetAC } from "./personAC";

function personThunkAC(dispatch) {
  var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
  var stringName='Chernogeva_Anastasia_FD3_Project_Shop_CherAS';
  let sp = new URLSearchParams();
  sp.append('f', 'READ');
  sp.append('n', stringName);
    // Как и любой action creator, countriesThunkAC должен вернуть action,
    // только action будет не хэш, а ФУНКЦИЯ.
    // Все middleware стоят ДО редьюсеров, их задача - преобразовывать или фильтровать action-ы.
    // Конкретно middleware "thunk", если обнаруживает что action - функция а не хэш, 
    // ВЫПОЛНЯЕТ эту функцию и не пропускает её дальше, к редьюсерам.
    return function() {
        dispatch( personLoadingAC() );

        isoFetch(ajaxHandlerScript, { method: 'post', body: sp })
            .then( (response) => { // response - HTTP-ответ
                if (!response.ok) {
                    let Err=new Error("fetch error " + response.status);
                    Err.userMessage="Ошибка связи";
                    throw Err;
                }
                else
                    return response.json();
            })
            .then( (data) => {
                dispatch( personSetAC(data.rows) );
            })
            .catch( (error) => {
                console.error(error);
                dispatch( personErrorAC() );
            })
        ;
    }

}

export {personThunkAC};
