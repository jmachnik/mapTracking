import React from 'react';
import ReactDOM from 'react-dom';
import {Marker} from "./Marker";

const properProps = {
    lat: 12,
    lng: 12,
    name: 'Name',
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Marker lng={properProps.lng} lat={properProps.lat}
                            name={properProps.name}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});




