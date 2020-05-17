import React, { Fragment } from 'react';
import './App.css';
import App2 from './componets/App2';
import TodoList from './componets/TodoList';


function App(){
    return(
        <Fragment>
        <App2/>
        <TodoList/>
        </Fragment>

    );
}
export default App;
