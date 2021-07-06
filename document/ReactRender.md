
###  Cách thức re-render giữa các component cha con trong React?
 Component cha re-render là toàn bộ con cháu, chút, chít re-render theo.
 khái niệm **re-render** và **re-paint** khi làm việc với ReactJS.

 Giữa các lần update (re-rendering) này, React sẽ lấy kết quả render của chúng (là các thẻ jsx nằm trong hàm method  **render**- ứng với React Class Component, hay các tag jsx được đặt trong câu lệnh  **return**  - ứng với React Functional Component để so sánh (React gọi nó là cơ chế  **diffing**).

Nếu kết quả so sánh này có sự khác biệt, React sẽ  **thực sự**  change cây DOM thật (cái này gọi là re-painting). Nhìn chung, thứ ảnh hưởng đến hiệu suất của một trang web nhiều nhất chính là quá trình  **re-painting**  (vẽ lại) này

###  vì sao PureComponent và memo ra đời ?
PureComponent sẽ tự động xử lý thêm một bước **so sánh nông (shallow comparison)** bên trong life cycle **shouldComponentUpdate** để đảm bảo component chỉ được re-render khi các props hay state có sự thay đổi, từ đó cải thiện performance (hiệu suất).
**PureComponent** dùng cho các **React Class Component**, còn **React Functional Component** thì dùng... **memo**
Tóm lại: để tránh việc render nhiều, tăng hiệu suất.
```jsx
function PostContent(props) {
  /* render using props */
}
function areEqual(prevProps, nextProps) {
  /*
  trả ra true nếu nextprops và prevProps bằng nhau, 
  ngược lại trả ra false.
  */
  if (prevProps.postContent === nextProps.postContent) {
    return true;
  }
  return false;
}
export default React.memo(PostContent, areEqual);
```

###  So sánh nông là gì ?
```js
const nestedObjectA = {
  author: {
    name: 'Thien Bui',
    country: 'Viet Nam',
  },
};

const nestedObjectB = {
  author: {
    name: 'Thien Bui',
    country: 'Viet Nam',
  },
};

```

Thì khi so sánh

```js
console.log(nestedObjectA === nestedObjectB);

```

Sẽ cho ra kết quả là  **false**. Lý do thì như ta đã biết vì hai biến  nestedObjectA  và  nestedObjectB  đang trỏ đến hai  **địa chỉ vùng nhớ**  khác nhau. Và đây cũng chính là  **so sánh nông**.

Vì sao ư? Vì phép so sánh trên chỉ mới dừng lại ở  **bề mặt**, ở mức  **nông**, khi mà chỉ vừa nhìn thấy 2 con số chứa 2 địa chỉ vùng nhớ khác nhau là phép toán sẽ return ra  **false**  ngay.
**so sánh sâu**  -  **deep comparison**.

Nếu phép so sánh vừa rồi mà thực hiện  **so sánh sâu**  thì js sẽ đi so sánh đi sâu vào tận các property trong cùng.
```js
nestedObjectA.author.name === nestedObjectB.author.name;
//true. Vì cả 2 property name này đều đang là kiểu primitve, đều đang chứa giá trị 'Thien Bui'
nestedObjectA.author.country === nestedObjectB.author.country;
//true. Vì cả 2 property name này đều đang là kiểu primitve, đều đang chứa giá trị 'Viet Nam'
```
Tài liệu tham khảo tại:
https://kysumattien.com/react-purre-component-and-react-memo