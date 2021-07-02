### React context api?
dùng để truyền dữ liệu giữa các thành phần (component) mà k cần truyền qua props
 
#### khi nào sử dụng?
 + Sử dụng ngữ cảnh, chúng ta có thể tránh chuyển đạo cụ qua các yếu tố trung gian.
 + chủ yếu được sử dụng khi một số dữ liệu cần được truy cập bởi nhiều thành phần ở các mức lồng ghép khác nhau.
 + cho phép bạn "truyền phát" dữ liệu đó và thay đổi dữ liệu đó tới tất cả các thành phần bên dưới.
 
#### API?
tạo ngữ cảnh: 


``` js
const MyContext = React.createContext(defaultValue);
```

giá trị ngữ cảnh hiện tại từ kết quả khớp gần nhất Provider

**Context.Provider**

``` js
<MyContext.Provider value={/* some value */}>
```
Mỗi đối tượng Context đều đi kèm với một thành phần Provider React cho phép các thành phần tiêu thụ đăng ký thay đổi ngữ cảnh.

 **Class.contextType**
``` js
MyClass.contextType = MyContext;
```
Sử dụng thuộc tính này cho phép bạn sử dụng giá trị hiện tại gần nhất của loại Ngữ cảnh đó bằng cách sử dụng this.context.

**Context.Consumer**

``` js
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

Sử dụng thành phần này cho phép bạn đăng ký một context trong một thành phần chức năng .
