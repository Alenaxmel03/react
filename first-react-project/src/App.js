// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Title} from './components/title/title';
import FormInput from './components/form-input/forminput';
import UserInfo from './components/user-info/userinfo';
import {YearsWorked} from './components/years-worked/yearsworked'





export const App = () => {
  return (<div>
    <Title title={'Главная'}/> 
    <Title title={'Главная, но не совсем'}/> 
    <UserInfo userName={'Вова'} userGender={'муж'} userAge={'27'} userWorked={1}/>
    <UserInfo userName={'Иван'} userGender={'муж'} userAge={'21'} userWorked={2}/>
    <UserInfo userName={'Ольга'} userGender={'жен'} userAge={'37'} userWorked={3}/>
    <YearsWorked yearsWorked={'250'}/>
    <FormInput labelText={'телефон'} inputType={'phone'}/>
    <FormInput labelText={'имя'} inputType={'text'}/>
    <FormInput labelText={'пароль'} inputType={'password'}/>
  </div>)
};






// const Items = () => {
//   return (
//   <div>
//     <div>item</div>
//     <div>item</div>
//     <div>item</div>
//     <div>item</div>
//     </div>
//     );
// };



// function Title() {
//   return <h1>Привет мир!</h1>
// }


// const Title = () => <h1>Привет мир !</h1>;


// class FormInput extends React.Component {
//   render(){
//     return <input type="number"/>
//   }

// };

// export const App = () => {
//   return(
//     <div>
//     <Title/>
//     <FormInput/>
//     <Items/>
//     <Items/>
//     <Items/>
//     </div>
//   )
// };







// const getUser = () => {
//   return ({
//     name: 'Vova'
//   });
// }
// console.log(getUser());



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
