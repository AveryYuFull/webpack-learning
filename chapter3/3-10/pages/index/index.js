import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import '../../commonAvery.js';

class App extends Component {
    render () {
        return <h1>page index</h1>
    }
}

render(<App />, document.getElementById('app'));