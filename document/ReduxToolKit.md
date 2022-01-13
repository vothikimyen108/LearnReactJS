###  ReduxToolKit là gì?
Gói Redux Toolkit là cách chuẩn để viết logic Redux. Ban đầu nó được tạo ra để giúp giải quyết ba mối quan tâm phổ biến về Redux.
-   "Configuring a Redux store is too complicated"
-   "I have to add a lot of packages to get Redux to do anything useful"
-   "Redux requires too much boilerplate code"
###  Tìm hiểu các hàm?
**createSlice** thật sự đã tạo ra một cú pháp hoàn chỉnh, nhất quán và ngắn gọn cho việc quản lý **state** của ứng dụng với **redux**
```js
import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```
Giải thích các thông số
```js
function createSlice({
    // tên của trạng thái
    name: string,
    // giá trị trạng thái ban đầu
    initialState: any,
    // là mộ obj thực hiện các hành động
    reducers: Object<string, ReducerFunction | ReducerAndPrepareObject>
    // A "builder callback" function used to add more reducers, or
    // an additional object of "case reducers", where the keys should be other
    // action types
    extraReducers?:
    | Object<string, ReducerFunction>
    | ((builder: ActionReducerMapBuilder<State>) => void)
})
```
###  configureStore()
Khai báo tạo store

```js
import  {  configureStore  }  from  '@reduxjs/toolkit'

import rootReducer from  './reducers'

const  store  =  configureStore({  reducer:  rootReducer  })
```