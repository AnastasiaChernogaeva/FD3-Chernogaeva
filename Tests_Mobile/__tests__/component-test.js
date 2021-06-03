
import React from 'react';
import renderer from 'react-test-renderer';
 
/*import  '../App.js';*/
import MobileCompany from '../components/mobile';


test('работа MobileCompany', () => {
 
  // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany />
  );
 
  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
 
  // найдём в вёрстке компонента сами кнопки
 
 
  
  const buttonElems = component.root.find( el =>(el.props.bb=="block")); 
  // находим все кнопки
 
  buttonElems.props.forEach(elem=>{elem.props.onClick(); // по очереди нажимаем на кнопки и делаем снимк(так два раза)
  
  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  // и "нажмём" на неё
 
  elem.props.onClick();
  
  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
 
})
})  
 
  
 