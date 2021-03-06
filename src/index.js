import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Recipes from './components/recipes';
import * as serviceWorker from './serviceWorker';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Recipes />
  </ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
