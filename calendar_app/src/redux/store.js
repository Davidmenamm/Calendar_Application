import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash.throttle';
import rootReducer from './reducers';
import { loadState, saveState } from '../utils/localStorage';

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);


store.subscribe(
  throttle(() => {
    const currentState = store.getState();
    saveState({
      todos: currentState.todos,
    });
  }, 1)
);

export default store;
