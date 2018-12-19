import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';
import Appbar from '../components/AppBar';
import configure from './setup';


describe("Test rendering of Home", function(){
  it('renders without crashing', () => {
    shallow(<Home />);
  });
  
  /*
  it('renders Home component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.contains(<Appbar />)).toEqual(true);
  }); 
  */
});
