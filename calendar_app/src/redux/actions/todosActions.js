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
    // day
    day = parseInt(day)-1
    // loading
    // dispatch(update_loading(true))
    // current state
    let currentEvents = getState().todos.eventsInMonth;
    console.log("idx1");
    console.log(day, time, event, idx, parseInt(day));
    console.log("idx2");
    // check if repeated
    if (idx !== null && idx !== undefined){
      currentEvents[day][idx] = {day, time, event, color, city};
    } else {
      currentEvents[day].push({day, time, event, color, city});
    }
    // update state
    const updatedEvents = JSON.parse(JSON.stringify(currentEvents));
    dispatch(update_event(updatedEvents));
    // order todos
    dispatch(orderDayTodos({currentDay:day}));
}


/**
 * Delete Event
 * @param
 * @returns
 */
 export const deleteEvent = ({
  day, idx
}) => (dispatch, getState) => {
    // day
    day = parseInt(day)-1
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
    dispatch(orderDayTodos({currentDay:day}));
}


/**
 * Delete All Day Events
 * @param
 * @returns
 */
 export const deleteDayEvents = ({
  day
}) => (dispatch, getState) => {
    // day
    day = parseInt(day)
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
  currentDay
}) => (dispatch, getState) => {
    // compare function by time
    function compare( a, b ) {
      let result = 0;
      if ( parseInt(a.time) < parseInt(b.time) ) result = -1;
      if ( parseInt(a.time) > parseInt(b.time) ) result = 1;
      return result;
    }
    // loading
    // dispatch(update_loading(true))
    // current state
    let currentEvents = getState().todos.eventsInMonth;
    // check if repeated
    console.log('currentEvents[currentDay]');
    console.log(currentDay);
    currentEvents[currentDay].sort(compare);
    console.log('currentEvents[currentDay]');
    console.log(currentEvents[currentDay]);
    // update state
    const updatedEvents = JSON.parse(JSON.stringify(currentEvents));
    dispatch(update_event(updatedEvents));
}