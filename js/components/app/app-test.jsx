import React       from 'react';
import { shallow } from 'enzyme';
import App         from './app';
import TodoModel   from 'models/todoModel';

describe('App Component', () => {
  it('should render', () => {
    const model = new TodoModel('react-todos');
    expect(shallow(<App model={ model }/>)).toBeDefined();
  });
})

