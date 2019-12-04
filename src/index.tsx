import * as React from "react";
import * as ReactDOM from 'react-dom';
import {App} from './components/App'
import './styles/styles.scss';

const app = document.getElementById('app');

ReactDOM.render(<App title="React TS"/>, app);