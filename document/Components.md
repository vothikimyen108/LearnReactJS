###  Tìm  Hiểu về Functional và Class Components.
#### 1  React Component là gì?
"**component là một block code độc lập, có thể tái sử dụng, nó chia UI thành nhiều phần nhỏ. Mặt khác, có thể nghĩ đơn giản các components như một khối các blocks LEGO. Tương tự, cấu trúc LEGO đ"ược tạo từ nhiều blocks LEGO nhỏ, như tạo một web page hoặc UI từ nhiều block code(components).**"
Việc chia source code thành các components giúp ta rất nhiều. Mỗi component có code JS và CSS riêng, chúng có thể tái sử dụng, dễ đọc, dễ viết, dễ test.
 Có hai loại là Funtional và Class Components.
  ### 2 Funtional Components
  **functional component là một hàm Javascript (hoặc ES6) trả về 1 phần tử/1 element React. (JSX), nhận props làm đối số nếu cần **
Ví dụ 

``` js
const Example = () => { 
	return ( <h1>I'm a functional component!</h1> ); };
};
```
Lưu ý  **Functional components cũng được nói với một cái tên là stateless components**  bởi vì chúng ta không thể làm nhiều thứ phức tạp như quản lý React State (data) hoặc phương thức life-cycle trong functional components.

Tuy nhiên, React giới thiệu React Hooks trong versions 16.8, giờ nó cho phép chúng ta sử dụng state và những features khác trong functional components.
 ### 3 Class (Stateful) Components
 **Các Class components là những class ES6.** Chúng phức tạp hơn functional components ở chỗ nó còn có: phương thức khởi tạo, life-cycle, hàm render() và quản lý state (data)
 ``` js
import React from 'react' 
class UserLogin extends React.Component { 
	render() { return (
		<h1>Hello Yen</h1>
		) 
	}
}; 
export default UserLogin
```
React class component là:

-   là một class ES6, nó sẽ là một component khi nó "kế thừa" React  **component**.
-   có thể nhận  **props**  (trong hàm khởi tạo) nếu cần.
-   có thể maintain data của nó với  **state**
-   phải có 1 method  **render()**  trả về 1 React element (JSX), or null.



Tham khảo từ: https://viblo.asia/p/react-js-hieu-ve-functional-va-class-components-Qbq5QpkRlD8