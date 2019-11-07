import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Hello from './components/Hello.js'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import Events from './components/Events'
import Eventhandling from './components/Eventhandling';
import InputText from './components/InputText';
import Textarea from './components/Textarea';
import Selects from './components/Selects';
import Checkbox from './components/Checkbox';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Message/>
        <Counter/>
        <FunctionClick/>
        <ClassClick/>
      
     {/*<Greet name="gupta" ans="okay">
       <p>This is children props</p>
     </Greet>
     <Greet name="singh" ans="very good">
       <button>
         Action
       </button>
     </Greet>
     <Greet name ="abcd" ans="not good"/>
         <Welcome  name="gupta" ans="okay"/>
         <Welcome name="singh" ans="very good"/>
         < Hello/>*/
        /*<EventBind/>
        <Events />
        <Eventhandling />
        <InputText/>
         <InputText/>*/
        /*<Textarea/>*/
       /*<Selects/> */
        <Checkbox/>        }
        </div>
    );
  }
}

export default App;
