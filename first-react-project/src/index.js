import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';




// const upeerStr = (str) => str.toUpperCase();
// console.log(upeerStr('Привет'));




// const title = <h1>Hello React</h1>;
// console.log('title' , title);

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);





// ReactDOM.render(
//   <h1>Hello React {10 * 4} {foo()} {upeerStr('меня зовут алена')}</h1>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <h1>Hello <em>React</em></h1>,
//   document.getElementById("root")
// );


// ReactDOM.render(
//   <div>
//     <div>item</div>
//     <div>item</div>
//     <div>item</div>
//     <div>item</div>
//   </div>,
//   document.getElementById("root")
// );


// ReactDOM.render(
//   React.createElement('div', null, [
//     React.createElement('div', null, ['item']),
//     React.createElement('div', null, ['item']),
//     React.createElement('div', null, ['item'])]),
//   document.getElementById("root")
// );

