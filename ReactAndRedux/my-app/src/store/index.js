import { createStore } from "redux";

const initState = {
  counter: 0,
  showCounter: true,
};

const countReducer = (state = initState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: true,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: true,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: true,
    };
  }
  if (action.type === "show") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(countReducer);
export default store;
