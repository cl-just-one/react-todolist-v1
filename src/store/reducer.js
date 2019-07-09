import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes.js';

const defaultStore = {
  inputValue: '',
  list: []
}

// reducer可以接收state， 但是绝不能修改state
// 纯函数 给定固定的输入 具有固定的输出 一定没有副作用
export default (store = defaultStore, action) => {
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(store));
    newState.list = action.data;
    return newState;
  }
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(store));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(store));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(store));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return store;
}