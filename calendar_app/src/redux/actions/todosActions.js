/**
 * Imports
 */
// import axios from 'axios';
import { createAction } from 'redux-actions';


/* Action Names */
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
const UPDATE_EVENT = 'UPDATE_EVENT';
const UPDATE_LOADING = 'UPDATE_LOADING';
/* Actions */
export const increment_counter = createAction(INCREMENT_COUNTER);
export const decrement_counter = createAction(DECREMENT_COUNTER);
export const update_event = createAction(UPDATE_EVENT);
export const update_loading = createAction(UPDATE_LOADING);



/**
 * Add Event
 * @param
 * @returns
 */
export const addEvent = ({
  day, time, event, idx, color, city
}) => (dispatch, getState) => {
    // loading
    // dispatch(update_loading(true))
    // current state
    let currentEvents = getState().todos.eventsInMonth;
    console.log("idx1");
    console.log(day, time, event, idx, parseInt(day), (parseInt(day)-1).toString());
    console.log("idx2");
    // check if repeated
    if (idx !== null && idx !== undefined){
      currentEvents[parseInt(day)-1][idx] = {day:(parseInt(day)-1).toString(), time, event, color, city};
    } else {
      currentEvents[parseInt(day)-1].push({day:(parseInt(day)-1).toString(), time, event, color});
    }
    // update state
    const updatedEvents = JSON.parse(JSON.stringify(currentEvents));
    dispatch(update_event(updatedEvents));
    // order todos
    dispatch(orderDayTodos({day}));
}


/**
 * Delete Event
 * @param
 * @returns
 */
 export const deleteEvent = ({
  day, idx
}) => (dispatch, getState) => {
    // loading
    // dispatch(update_loading(true))
    // current state
    let currentEvents = getState().todos.eventsInMonth;
    // check if repeated
    currentEvents[day].splice(idx, 1);
    // update state
    const updatedEvents = JSON.parse(JSON.stringify(currentEvents));
    dispatch(update_event(updatedEvents));
    // order todos
    dispatch(orderDayTodos({day}));
}


/**
 * Delete All Day Events
 * @param
 * @returns
 */
 export const deleteDayEvents = ({
  day
}) => (dispatch, getState) => {
    // loading
    // dispatch(update_loading(true))
    // current state
    let currentEvents = getState().todos.eventsInMonth;
    // check if repeated
    currentEvents[day] = []
    // update state
    const updatedEvents = JSON.parse(JSON.stringify(currentEvents));
    dispatch(update_event(updatedEvents));
}


/**
 * Order todos of current day
 * @param
 * @returns
 */
 export const orderDayTodos = ({
  day
}) => (dispatch, getState) => {
    // compare function by time
    function compare( a, b ) {
      let result = 0;
      if ( a.time < b.time ) result = -1;
      if ( a.time > b.time ) result = 1;
      return result;
    }
    // loading
    // dispatch(update_loading(true))
    // current state
    let currentEvents = getState().todos.eventsInMonth;
    // check if repeated
    console.log('currentEvents[day]');
    console.log(day);
    currentEvents[day].sort(compare);
    console.log('currentEvents[day]');
    console.log(currentEvents[day]);
    // update state
    const updatedEvents = JSON.parse(JSON.stringify(currentEvents));
    dispatch(update_event(updatedEvents));
}