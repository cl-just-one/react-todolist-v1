import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes.js';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/todolist').then((res) => {
      const action = initListAction(res.data);
      dispatch(action);
    })
  }
}