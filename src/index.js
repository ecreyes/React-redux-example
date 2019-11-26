import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';

import {addTodoAction,completeTodoAction} from './actions/todo';

console.log(store.getState());
let unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});


store.dispatch(addTodoAction('Aprender sobre acciones'));
store.dispatch(completeTodoAction(0));
unsubscribe();



ReactDOM.render(<App />, document.getElementById('root'));
