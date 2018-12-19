import React from 'react';
import { shallow, mount } from 'enzyme';
import Menu from '../components/Menu';
import reducer from '../reducers';
import { createStore } from 'redux';
import configure from './setup';

const store = createStore(
  reducer
);

it('sets open state to true on button click', () => {
  const component = mount(<Menu store={store}/>);
  component.find('[id="del"]').at(0).simulate('click');
  // console.log(component.find('#del'));
  expect(component.state('open')).toEqual(true);
  component.unmount();
});