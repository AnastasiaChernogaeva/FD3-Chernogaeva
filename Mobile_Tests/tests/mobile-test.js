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

 
  
  const buttonElem = component.root.find( el => el.id=='#1' /*&& el.props.aaa == 'bbb'*/ ); 
  // и "нажмём" на неё

  buttonElem.props.onClick();
  
  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonElem = component.root.find( el => el.id=='#2' /*&& el.props.aaa == 'bbb'*/ ); 
  // и "нажмём" на неё

  buttonElem.props.onClick();
  
  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();


  const buttonElem = component.root.find( el => el.id=='#3' /*&& el.props.aaa == 'bbb'*/ ); 
  // и "нажмём" на неё

  buttonElem.props.onClick();
  
  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonElem = component.root.find( el => el.id=='#4' /*&& el.props.aaa == 'bbb'*/ ); 
  // и "нажмём" на неё

  buttonElem.props.onClick();
  
  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
   
 
  
  /*
  // можно эмулировать события, передавая в качестве объекта события то что нам нужно:
  wrapper.find('select').simulate('change', {
    target: { value: "hello" },
  });
  */
  });
