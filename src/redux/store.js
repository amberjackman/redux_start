import {applyMiddleware, createStore} from 'redux';
import reducer from './reducers/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {todoApp}

// function middleware1(store) {
//   console.log('middleware1', 0);
//   return (next) => {
//     console.log('middleware1', 1);
//     return (action) => {
//       console.log('middleware1', 2);
//       const returnValue = next(action);
//       console.log('middleware1', 3);
//       return returnValue;
//   };
// };
// };

const store = createStore(todoApp, composeWithDevtools(applyMiddleware()));

export default store;

