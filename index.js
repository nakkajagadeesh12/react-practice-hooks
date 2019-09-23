import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {MainWrapperLogic} from './MainWrapperLogic'
import {CheckBoxList}  from './CheckBoxList'
  

const App=()=>{
    return <div><div>Hello App</div><CheckBoxList/></div>
}
render(<App />, document.getElementById('root'));
