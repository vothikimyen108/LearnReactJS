###  ReactRouter là gì?
**React-Router là gì?**

 `React-Router` là một thư viện định tuyến (routing) tiêu chuẩn trong React, Router dùng chủ yếu phát triển các ứng dụng Web dạng Single Page. Nó cho phép chuyển qua lại giữa các component mà không cần nạp lại trang. React có 3 gói cho routing 
	– react-router: cung cấp các thành phần routing chính cho ứng dụng. 
	– react-router-native: dùng cho các ứng dụng di động. 
	– react-router-dom: dùng cho các ứng dụng Web.
 Cài đặt:
> npm install react-router-dom --save

**Các thành phần trong React-Router**

 **BrowserRouter**: xử lý các URL động. Được sử dụng phổ biến hơn, nó sử dụng `History API` có trong `HTML5` để theo dõi lịch sử bộ định tuyến của bạn.

**HashRouter**: xử lý các request tĩnh. Sử dụng `hash` của `URL` (window.location.hash) để ghi nhớ mọi thứ.
**Route**: một ánh xạ (mapping) giữa một URL và một `Component`, khi người dùng truy cập URl thit component nó đc hiển thị.
**Switch**: chứa các Route để render các component kho path khớp.
 Các tham số: 
 -   **path:**  Là đường dẫn trên URL.
 -   **exact:**  Liúp cho route này này chỉ hoạt động nếu URL trên trình duyệt phù hợp tuyệt đối với giá trị của thuộc tính path của nó.
 -   **component:**  Là component sẽ đươc load ra tương ứng với Route đó.
```js
<Route path="/" exact component={Home}  /> 
```

**Link**: HTML thì cặp thẻ để chuyển hướng đó là thẻ `<a></a>` thì trong react chúng ta sẽ dử dụng cặp thẻ `<Link></Link>` được `import` từ `React-Router`.

 -  **to**: Giống như thuộc tính  `href`  trong thẻ  `a`.

**NavLink**: tương tự Link nhưng cho phép thêm style cho active link

**Redirect**: dùng chuyển hướng đến route khác trong ứng dụng, nhưng vẫn duy trì URL cũ.
**useHisrtory** được sử dụng để thay đổi url, ví dụ như khi bạn đang ở mà hình login chẳng hạn, `\users\login`, sau khi đã authen xong thì cần redirect tới màn dashboard, ta dùng
ví dụ
```js
	const history = useHistory(); 
	history.push('\dashboard`);
```
**Prompt**
Sử dụng  **API Prompt**  giúp chúng ta ngăn chặn việc điều hướng trực tiếp, giả sử một tác vụ đang được thực hiện,  **user**  muốn điều hướng sang màn hình khác hay thoát khỏi ứng dụng sẽ cần thông qua thêm một bước xác nhận,  **Promp**  được  **render**  như một element bên trong  **React Component**.