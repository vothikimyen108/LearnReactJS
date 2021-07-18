// import { createStore } from "redux";

// const initState = {
//   counter: 0,
//   showCounter: true,
// };

// const countReducer = (state = initState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: true,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: true,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: true,
//     };
//   }
//   if (action.type === "show") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// const store = createStore(countReducer);
// export default store;
//dùng reduc tool kit
  
// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: 'authentication',
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });
// //nó chỉ trả về 1 store nên dùng obj để trả về niều slice
// const store = configureStore({
//   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
// });

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

// export default store;

//rút gọn file
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;