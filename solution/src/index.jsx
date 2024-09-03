import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Auth from './Auth.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Auth />, rootElement);

// REACT APPROACH (!!!)
// 1. Divide the UI into components +++
// header, footer, main (text, table (row), navigation)
// 2. Build static version in React +++
// 3. Think about props, state (where, which) +++
// 4. Write logic in JS/TS (80% JS, 20% JS)
