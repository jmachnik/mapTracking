import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from "enzyme";

it( 'renders wwithout crashing', () => {
    const wrapper = shallow(<App />).dive();
});
