# React JS
### UseEffect
#### Side effect là gì?
- Side effects là các hiệu ứng phụ tác động và làm biến đổi trạng thái state bên ngoài chương trình. Đây là thuật ngữ chuyên ngành được sử dụng trong lĩnh vực lập trình phần mềm

  ví dụ: Khi bạn thao tác nhập dữ liệu username, password và ấn submit trên một hàm submit Login, phần mềm sẽ lần lượt xử lý.. gọi api lấy dữ liệu, getTimeOout, getInterval

  chia làm 2 loại: 
  - effect không cần clean up: gọi api, thương tác với DOM
  - effect cần clean up: subscriptions, setTimeout, setInterval 
#### Hook UseEffect là gì?
useEffect để quản lý vòng đời của của một component và nó phục vụ chúng ta sử dụng trong function component thay vì các lifecycle như trước đây trong class component.
- được thực thi sau mỗi lần render
- được thực thi ít nhất một lần sau lần render đầu tiên
- những lần render sau được thực thi nếu dependencies thay đổi
- effect clean up được thực thi trước run effect lần tiếp theo hoạc unmount

cú pháp
``` js
import React, { useEffect } from 'react';
funtion useEffect(callback, dependencies) {
 //callback: side effect cần dùng
 //dependencies: hàn gọi lại nếu dependencies thay đổi
}
```
##### code thực tế sử dụng useEffect
``` js
import React, { useState, useEffect } from "react";
function Example() {
  //khai báo color sử dụng state
  //chạy trước khi render
  const [color, setColor] = useState("dark");
  //chạy sau khi render
  useEffect(() => {
    //nói làm side effect
    return {
      //clean up ở đây
      //chạy trước lần render tiếp theo or unmount
    };
  },[]);
  //redering 
  return <h1>Hello yen!!!</h1>;
}
```

    // xem cách nó hoạt động nhé
    Mounting
    Rendering
    run useEffect()
    Updating
    Rendering
    run useEffect() clean up nếu dependencies thay đổi
    run useEffect() nếu dependencies thay đổi
    Unmounting
    run useEffect() clean up nếu dependencies thay đổi
#### Dùng useEffect với điều kiện.
1.Không khai báo dependencies

  ý nghĩa nó luôn luôn được thực hiện sau mỗi lần render ví dụ:
``` js
  //chạy sau khi render
  useEffect(() => {
    //nói làm side effect
    return {
      //clean up ở đây
      //chạy trước lần render tiếp theo or unmount
    };
  });
```
2.Để mảng rỗng

ý nghĩa chạy đúng 1 lần, ví dụ:
``` js
  //chạy sau khi render
  useEffect(() => {
    //nói làm side effect
    return {
      //clean up ở đây
      //chạy trước lần render tiếp theo or unmount
    };
  },[]);
```
3.có dependencies

ý nghĩa chạy 1 lần sau lần render đầu, chạy tiếp nếu dependencies thay đổi
``` js
  //chạy sau khi render
  useEffect(() => {
    //nói làm side effect
    return {
      //clean up ở đây
      //chạy trước lần render tiếp theo or unmount
    };
  },[filter]);
```
