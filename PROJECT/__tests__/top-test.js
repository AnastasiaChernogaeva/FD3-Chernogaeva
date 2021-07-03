import React from 'react';
import renderer from 'react-test-renderer';
 
import Top from '../components/top';


test('работа Top', () => {
 
  // создаём тестовую версию компонента
  const component = renderer.create(
    <Top />
  );
 
  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
 
  // найдём в вёрстке компонента сами кнопки
 
  const buttonEleme1 = component.root.find( el =>(el.props.id=="FirstT")); 
  const buttonEleme2 = component.root.find( el =>(el.props.id=="SecT")); 
  const buttonEleme3 = component.root.find( el =>(el.props.id=="ThT")); 
  
  // const buttonEleme1 = component.root.find( el =>(el.props.testPrT1=="buttOn")); 
  // const buttonEleme2 = component.root.find( el =>(el.props.testPrT2=="buttOn")); 
  // const buttonEleme3 = component.root.find( el =>(el.props.testPrT3=="buttOn")); 

  const buttonElems=[buttonEleme1, buttonEleme2, buttonEleme3,];
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