import React, {Component} from 'react';
import './App.css';
import MapWrapper from "./components/MapWrapper";
import LeftDrawer from "./components/LeftDrawer";


class App extends Component<{}, {}> {
    render() {
        return (
            <div className="App">
                <LeftDrawer/>
                <MapWrapper/>
            </div>
        );
    }
}

export default App;
