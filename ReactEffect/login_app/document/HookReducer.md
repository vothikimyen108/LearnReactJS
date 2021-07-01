### REACT HOOKS USEREDUCER
#### USEREDUCER là gì?
useReducer như là một phiên bản nâng cấp hơn của useState, dùng để quản lý những state của giao diện, thay vì dùng nhiều useState sử lý phức tạp thì dùng useReducer đơn giản và logic hơn.
 
cú pháp:
``` js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```
**state**: Ảnh chụp nhanh trạng thái được sử dụng trong chu kỳ kết xuất / đánh giá lại thành phần. (là cái trạng thái cần dùng)
**dispatch**: Một chức năng có thể được sử dụng để gửi một hành động mới (tức là kích hoạt cập nhật trạng thái).
**reducer**: (presate, action) => newState 
Một chức năng được kích hoạt tự động sau khi một hành động được gửi đi (qua sendFn ()) - nó nhận được ảnh chụp nhanh trạng thái mới nhất và sẽ trả về trạng thái mới, được cập nhật.
**initialState**: Trạng thái ban đầu.
**initFn**: Một chức năng để thiết lập trạng thái ban đầu theo chương trình