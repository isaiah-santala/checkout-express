import React from 'react';
import { shallow } from 'enzyme';
import StDescipt from '../src/components/StDescript.jsx';

describe('Examining the syntax of Jest tests', () => {
   
    it('sums numbers', () => {
        expect(1 + 2).toEqual(3);
        expect(2 + 2).toEqual(4);
     });
  });

describe('test1', () => {
    it('renders without crashing', () => {
        shallow(<StDescipt descriptArr={["test1", "test2", "test3"]}/>);
      });
})