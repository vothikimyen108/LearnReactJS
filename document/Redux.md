### Tìm hiểu về Redux?
#### Redux là gì?
Redux là một thư viện để quản lý và cập nhật state, state có thể dự đoán được.
A state management system for cross-component or app-wide state
#### What Is Cross-Component / App-Wide State?
|Local State  |Cross-Component State  |App-Wide State|
|--|--|--|
| cho một components duy nhất|Cho nhiều components|Hầu hết tất cả component| 
|Ex: userinput|Ex. giỏ hàng |Ex. Info user..| 
|useState(), useReducer()|React Context or Redux|React Context or Redux| 
#### Cơ chế hoạt động redux?
![enter image description here](https://images.viblo.asia/3ba0e90f-1834-45b1-a5ab-a6f58abf21a0.gif)
Hoạt theo một chiều :

Ban đầu co 1 state khởi tạo cho store này được đẩy lên trên UI(View). Ví dụ có một hành động bấm deposit nó chạy lên actions -> dispatcher vào store trong store có Reducer nó nhận vào 2 thứ, state hiện tại và thông tin actions được gửi lên đây tạo và biến đổi từ state cũ ra state mới. 

#### React context và redux?
Như chúng ta đã biết React context cũng quản lý các state áp dụng cho nhiều coponents toàn app được như redux. Vậy tại sao cần redux ?

Bởi vì redux có vài nhược điểm tìm ẩn đối với các app nhỏ và vừa thì nó không có vấn đề, còn đối với các app lớn, sử dụng nhiều context để quản lý mang lại hiệu suất không tốt.

  + Khi nào cần dùng Redux.
  + Dữ liệu ở nhiều nơi
  + Có hổ trợ undo/ Redo
  + Cần cache dữ liệu tái sử dụng cho lần sau.
  

> Không nhất thiết dùng Redux, nếu app bạn chạy ổn, Redux không chỉ dược dùng với React js mà dùng với nhiều thư viện js khác nữa

####  Redux cơ bản
Cài đặt Redux

> npm install --save redux

Bắt đầu làm quen redux
``` js
//khai báo redux
const  redux = require("redux");

//tạo một hàm xử lý reducer/ nhận vào 2 tham số old state , và action
const  countReducer = (state = { counter:  0 }, action) => {
//xử lý các action

	if (action.type === "increment") {
		return {
		counter:  state.counter + 1,
		};
	}
	if (action.type === "decrement") {
		return {
		counter:  state.counter - 1,
		};
	}
	return  state;
};

//tạo ra một store nơi chưa các state hiện hành
const  store = redux.createStore(countReducer); //tạo store nhận vào hàm xử lý state

//hàm gọi state hiện có
const  countSubscribe = () => {
	
	const  lastetate = store.getState(); // Phương thức getState() trả state hiện tại
	console.log(lastetate);

};

//dùng Phương thức subscribe() đăng ký hàm callback sẽ được gọi mỗi khi store được cập nhật

store.subscribe(countSubscribe); //khi gọi phương thức này sẽ gọi hàm countSubscribe

//Phương thức dispatch() được gọi, store chạy reducer nhận state được
//cập nhật và chạy các hàm callback được subscribe để cập nhật UI.

store.dispatch({ type:  "increment" }); //hành động tăng
store.dispatch({ type:  "decrement" }); // thực hiện hành động giảm
```
