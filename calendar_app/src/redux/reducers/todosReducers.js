import { handleActions } from 'redux-actions';
import {
  increment_counter,
  decrement_counter,
  update_event,
  update_loading
} from '../actions/todosActions'


const initialState = {
  counter: 0,
  updateLoading: false,
  eventsInMonth: [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
  ],
}

export const todosReducers = handleActions(
  {
      [increment_counter]:
      (state, action) => ({
        counter: state.counter + action.payload
      }),
      [decrement_counter]:
      (state, action) => ({
        counter: state.counter - action.payload
      }),
      [update_event]:
      (state, action) => ({
        eventsInMonth: action.payload
      }),
      [update_loading]:
      (state, action) => ({
        updateLoading: action.payload
      })
  },
    initialState
);