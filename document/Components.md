###  Tìm  Hiểu về Functional và Class Components.
#### 1  React Component là gì?
"**component là một block code độc lập, có thể tái sử dụng, nó chia UI thành nhiều phần nhỏ. Mặt khác, có thể nghĩ đơn giản các components như một khối các blocks LEGO. Tương tự, cấu trúc LEGO đ"ược tạo từ nhiều blocks LEGO nhỏ, như tạo một web page hoặc UI từ nhiều block code(components).**"
Việc chia source code thành các components giúp ta rất nhiều. Mỗi component có code JS và CSS riêng, chúng có thể tái sử dụng, dễ đọc, dễ viết, dễ test.
 Có hai loại là Funtional và Class Components.
  ### 2 Funtional Components
  **functional component là một hàm Javascript (hoặc ES6) trả về 1 phần tử/1 element React. (JSX), nhận props làm đối số nếu cần**

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

### Class-based Component Lifecycle

![Minion](https://i.ibb.co/2hJ882f/vongdoi.png)

Vòng đời của componen gồm 3 giai đoạn:
**componentDidMount()** : lúc mới tạo ra, add và trong Dom
**componentDidUpdate()**: Có thay đổi
**componentWillUnmount()**: Bị hủy khỏi khỏi Dom


Mỗi giai đoạn có các event cần thực hiện

![Minion](https://i1.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?resize=1024%2C567&ssl=1)

### Mounting (Diễn ra đúng 1 lần)
Thực hiện các sự kiện gọi hàm các hàm sau: 
-   [**`constructor()`**](https://reactjs.org/docs/react-component.html#constructor)
-   [`static getDerivedStateFromProps()`](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
-   [**`render()`**](https://reactjs.org/docs/react-component.html#render)
Sau khi chạy hết có gọi [**`componentDidMount()`**](https://reactjs.org/docs/react-component.html#componentdidmount)

### Updating (thực được nhiều lần) 
Quá trình này nó chạy qua  [`static getDerivedStateFromProps()`](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops) 
Xuống -   [`shouldComponentUpdate()`](https://reactjs.org/docs/react-component.html#shouldcomponentupdate),  rồi [**`render()`**](https://reactjs.org/docs/react-component.html#render),  uppdate Dom [`getSnapshotBeforeUpdate()`](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate), cuối cùng là -   [**`componentDidUpdate()`**](https://reactjs.org/docs/react-component.html#componentdidupdate)
 ### Unmounting 
 nó sẽ là components  [**`componentWillUnmount()`**](https://reactjs.org/docs/react-component.html#componentwillunmount)

*Lưu ý*
>  Sơ đồ trên phức tạp chỉ cần sử dụng cho những các chuyên sâu, nhiều khi không cần dùng dưới đây là sơ đồ đc rút gọn thường được dùng nhiều hơn, hạn chế dùng didupdate tạo ra vòng lặp vô tận.
> 
![Minion](https://i.ibb.co/gZZ6V7R/vongdoi1.png)

### Tìm hiểu các khái niệm cơ bản, khi nào dùng chúng.

1. Constructor()
cú pháp: 
``` js
constructor(props)
```
+ sử dụng thoải mái
+  được dùng định các state
+  định nghĩa props (properties) của component
+  nhớ super()
``` js
constructor(props) {
  super(props);
  // Don't call this.setState() here! 
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

 ### componentDidMount()
 - được dùng để khởi tạo dữ liệu cho component, gọi api, biến đổ dữ liệu cập nhật state
 - Gửi tracking baseview 
 ví dụ:
 
 ``` js
class HomePage extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			productList: [],
		};
	}
	async componentDidMount() {
		try {
			// Send GA page view tracking
			analytics.page('Home page');
			const productList = await productApi.getAll();
			this.setState({
			productList,
			loading: false,
		});
		} catch (error) {
			console.log('Failed to fetch product list: ', error);
			this.setState({loading: false});
			}
		}
	render() {
		const { loading, productList} = this.state;
		if (loading) return <Loader />;
		return <ProductList productList={productList}>
		}
	}
}
```
###  componentDidUpdate()
Hạn chế dùng, chỉ dùng khi nâng cao

### componentWillUnmount()
được gọi khi một thành phần được ngắt kết nối và hủy, 
Cleartimeout hoặc interval nếu có dùng.
Reset dữ liệu trên redux nếu cần thiết.
```js
class Home extends PureComponent {
	constructor(props) {
		super(props);
		this.isComponentMounted = false;
		this.state = {
		productList: [],
	}
	}
	async componentDidMount() {
		this.isComponentMounted = true;
		try {
		const productList = await productApi.fetchProductList();
		if (this.isComponentMounted) {
		this.setState({ productList });
	}
	} catch (error) {
		console.log('Failed to fetch data:', error);
	}
	}
	componentWillUnmount() {
		this.isComponentMounted = false;
	}
	render() {
	// Render something here ...
	}
}
```
>
>**không nên gọi `setState()`**  trong `componentWillUnmount()` vì thành phần sẽ không bao giờ được hiển thị lại. Sau khi một cá thể thành phần được ngắt kết nối, nó sẽ không bao giờ được gắn kết lại.
>