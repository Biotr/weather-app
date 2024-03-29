import React from 'react';
import ReactDOM from 'react-dom';
import { WeatherApp } from './components/WeatherApp'
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import "./styles/styles.scss"




ReactDOM.render(

  <WeatherApp />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
