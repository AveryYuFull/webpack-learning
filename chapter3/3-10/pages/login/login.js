import React, { Component } from 'react';
import { render } from 'react-dom';
import './login.css';
import '../../commonAvery.js';

class App extends Component {
    render () {
        return <h1>page Login</h1>
    }
}

render(<App />, document.getElementById('app'));
