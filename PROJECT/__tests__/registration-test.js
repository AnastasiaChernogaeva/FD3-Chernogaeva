import React from 'react';
import renderer from 'react-test-renderer';
 
import Registration from '../components/registration';


test('работа Registration', () => {
 
  // создаём тестовую версию компонента
  const component = renderer.create(
    <Registration />
  );
 
  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
 
  // найдём в вёрстке компонента сами кнопки
 
  const buttonEleme1 = component.root.find( el =>(el.props.id=="FirstR")); 
  const buttonEleme2 = component.root.find( el =>(el.props.id=="SecR")); 
 
  // const buttonEleme1 = component.root.find( el =>(el.props.testPrR1=="buttOn")); 
  // const buttonEleme2 = component.root.find( el =>(el.props.testPrR2=="buttOn"));  

  const buttonElems=[buttonEleme1, buttonEleme2,];
  // находим все кнопки
 
  buttonElems.forEach(elem=>{elem.props.onClick(); // по очереди нажимаем на кнопки и делаем снимк(так два раза)
  
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