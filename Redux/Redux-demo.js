//khai báo redux
const redux = require("redux");
//tạo một hàm xử lý reducer/ nhận vào 2 tham số  old state , và action
const countReducer = (state = { counter: 0 }, action) => {
  //xử lý các action
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
//tạo ra một store nơi chưa các state hiện hành
const store = redux.createStore(countReducer); //tạo store nhận vào hàm xử lý state

//hàm gọi state hiện có
const countSubscribe = () => {
  const lastetate = store.getState(); // Phương thức getState() trả state hiện tại
  console.log(lastetate);
};
//dùng Phương thức subscribe() đăng ký hàm callback sẽ được gọi mỗi khi store được cập nhật
store.subscribe(countSubscribe); //khi gọi phương thức này sẽ gọi hàm  countSubscribe

//Phương thức dispatch() được gọi, store chạy reducer nhận state được 
//cập nhật và chạy các hàm callback được subscribe để cập nhật UI.

store.dispatch({ type: "increment" }); //hành động tăng
store.dispatch({ type: "decrement" }); // thực hiện hành động giảm
