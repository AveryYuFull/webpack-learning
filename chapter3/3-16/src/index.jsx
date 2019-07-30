import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
class App extends Component {
    render () {
        return <h1>eslint check</h1>;
    }
}

render(<App />, document.getElementById('app'));
