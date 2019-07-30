import React, { Component } from 'react';
import { render } from 'react-dom';
import AveryWebpack from 'avery-webpack';
import 'avery-webpack/lib/main.css'
class App extends Component {
    render () {
        return (
            <AveryWebpack></AveryWebpack>
        );
    }
}

render(<App />, document.getElementById('app'));
