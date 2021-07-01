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

Ví dụ: 

``` js
//tạo giá trị đàu của state
const initialState = {count: 0};
//hàm thay đổi state
function reducer(state, action) {
//nếu nhận increment thì count thay đổi khác...
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
     Count: {state.count}//gọi ra giá trị state
    //   gọi dispatch() thay đổi type
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

#### So sánh useState và useReducer?

| useState| useReducer    |
|----------|:-------------:|
|là công cụ quảng lý state chính|  dùng nó nếu bạn quản lý nhiều state chung| 
| Dễ sử dụng/ dữ liệu độc lập |    liên quan nhiều data cú pháp khó hơn  |  
| cập nhật được ít | tốt khi dùng cập nhật trạng thái |  

::: warning
*tham khảo từ nhiều nguồn trên internet*
:::