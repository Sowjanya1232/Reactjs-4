import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Component.js'
import Button from './Buttons.js';
import './style.css';
ReactDOM.render(
    <Content>
        <Button/>
    </Content>,
    document.getElementById("root")
)