import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddRecipe from './AddRecipe';
var destination = document.querySelector('#container');

ReactDOM.render(
    <div>
        <AddRecipe />
    </div>,
    destination
);