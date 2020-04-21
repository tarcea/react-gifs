import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import Main from './components/main';


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Main />, root);
}
