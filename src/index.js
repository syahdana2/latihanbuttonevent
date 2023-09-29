import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './component/button';
import ButtonHandler from './component/buttonhandler';
import AlertButton from './component/buttonprops';
import Toolbar from './component/buttontoolbar';
import App from './component/buttonnaming';
import Toolbar1 from './component/buttonpropagasi';
import Signup from './component/buttontext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button />
    <ButtonHandler />
    <AlertButton />
    <Toolbar />
    <App />
    <Toolbar1 />
    <Signup />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
