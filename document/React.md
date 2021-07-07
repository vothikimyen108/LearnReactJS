### React hoạt động như nào?

#### **React là gì?**

- react là một thư viện javascrip để xây dựng giao diện người dùng.

- react bao gồm các  component, sự dụng các compoment để xâu dựng UI, khả năng tái sử dụng cao

**React Dom**
là giao diện web, react không biết về trình duyện, nó biết cách làm việc với các  component, reactdom làm việc với các thành phần html.

react quản lý stats, props, context.
 - state 
quản lý thay đổi được, *sử dụng ở môt  component*
- props để truyền dữ liệu từ cha xuống con, không thay đổi đc dữ liệu
- context(Global State)(Redux) thay đổi được, *được nhiều component sử dụng*

**Hoạt động React**

React sử dụng một khái niệm gọi là the virtual DOM, xác định các tree conponent 
mỗi thành phần cha có các thành phần con, mã JSX được trả về
xác định cây thành phần đó hiện tại trông như nào sẻ nó sẽ như vậy Và thông tin đó sau đó được chuyển đến ReactDOM sẽ thao tác với DOM thực như thế nào để khớp với DOM ảo đó.

 khi mà componnet có sự thay đổi từ props, state, context ..react Dom sẽ cập nhật lại thứ cần thay đổi mà không cập nhật lại hết.

![a-kitten.jpg](https://i.ibb.co/HYB2Yf1/reactHow.jpg)

**Virtual DOM**
- ReactJS sử dụng DOM ảo (virtual DOM) để cải
thiện hiệu năng của các ứng dụng Web thay vì
sử dụng DOM thật truyền thống.

- Virtual DOM có đầy đủ đặc tính của DOM.

- Khi một node trên Virtual DOM thay đổi, nó tìm
node thay đổi bằng cách so sánh sự khác nhau
giữa DOM và Virtual DOM, node tìm thấy sẽ
được cập nhật mà không ảnh hướng đến các
node khác trên DOM.

**JSX là gì?**

JSX (Javascript XML) cho phép viết HTML bên
trong Javascript và chuyển các thẻ HTML thành
các thành phần (component) của React.
Biểu thức có thể được viết giữa cặp dấu ngoặc
nhọn {}.




*Tài liệu này dung từ nhiều nguồn*