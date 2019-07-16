// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();




/*** 
====================================================================
    1 step import createStore method for redux
====================================================================
***/
import { createStore } from 'redux';


const  intialState = {
    result: 1,
    lastValues: []
};



/*** 
====================================================================
    3 step is create reducer
====================================================================
***/
const reducer = (state = intialState, action) => {
  switch(action.type){
      case "ADD": // sub step 2.1 create switch case for action
          //state = state + action.payload;  // sub step 3.1 add payload for action
          state = {
             ...state,
             result : state.result + action.payload,
             lastValues: [...state.lastValues, action.payload] 
          };
          console.log(state)
          break;
      case "SUBTRACT":
            //state = state - action.payload;
            state = {
                ...state,
                result : state.result - action.payload,
                lastValues: [...state.lastValues, action.payload] 
             };
             console.log(state)
          break;    
  }
  return state;
} ;

/*** 
====================================================================
    2 step is create store
====================================================================
***/
const store = createStore(reducer);

/*** 
====================================================================
    5 step is subscribe store for updated state
====================================================================
***/
store.subscribe(()=>{
    //console.log("Store Updated " + store.getState());
})
 
/*** 
====================================================================
    4 step is dispatch action
====================================================================
***/
store.dispatch({
    type: "ADD", // sub step 2.1 create switch case for action
    payload: 100  // sub step 3.1 add payload for action
})

store.dispatch({
    type: "ADD", 
    payload: 22 
})

store.dispatch({
    type: "SUBTRACT", 
    payload: 80 
})
