import React from 'react';
import ReactDOM from 'react-dom';
import {InfoPanel} from "./InfoPanel";
import {shallow} from 'enzyme';

const properProps = {
    lat: 12,
    lng: 12,
    name: 'Name',
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InfoPanel point={properProps} followPoint={() => {}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with minimal props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InfoPanel followPoint={() => {}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing and have span', () => {
    const detailsPanel = shallow(
        <InfoPanel point={properProps} followPoint={() => {}}/>);
    expect(detailsPanel.contains('span')).toBeTruthy();
});





