import React from 'react';
import renderer from 'react-test-renderer';
 
/*import  '../App.js';*/
import Footer from '../components/footer';


test('работа Footer', () => {
 
  // создаём тестовую версию компонента
  const component = renderer.create(
    <Footer />
  );
 
  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
 
  // найдём в вёрстке компонента сами кнопки
 
 
  
  const buttonEleme1 = component.root.find( el =>(el.props.testPr1=="buttOn")); 
  const buttonEleme2 = component.root.find( el =>(el.props.testPr2=="buttOn")); 
  const buttonEleme3 = component.root.find( el =>(el.props.testPr3=="buttOn")); 

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
 