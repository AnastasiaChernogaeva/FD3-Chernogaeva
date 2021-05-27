"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/mobile';

test('работа MobileCompany', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку

  let allButtons=[];
  
  const buttonElem = component.root.find( el => el.type=='input' /*&& el.props.aaa == 'bbb'*/ ); 
  // и "нажмём" на неё

  buttonElem.props.forEach(elem=>{
      elem.props.onClick();
  
  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
   
 m.push( expect(componentTree).toMatchSnapshot());
  
  /*
  // можно эмулировать события, передавая в качестве объекта события то что нам нужно:
  wrapper.find('select').simulate('change', {
    target: { value: "hello" },
  });
  */
  })
  console.log(m);
});
