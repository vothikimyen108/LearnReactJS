### Development React JS

Triển khai ứng dụng reactjs lên một server thực thông qua các bước. Thông qua các bước sau.

### 1. Test code

### 2. Optimize Code

Lazy Loading là một kỹ thuật cũ để tối ưu hoá ứng dụng web cũng như ứng dụng di động. Cách hoạt động của nó khá đơn giản - Không hiển thị đối tượng nếu chúng không được xem hoặc không được yêu cầu tại thời điểm đó.

```js
import React, { Suspense } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";

import LoadingSpinner from "./components/UI/LoadingSpinner";

//để nó Loanding hết mấy cái file

const NewQuote = React.lazy(() => import("./Pages/NewQuote"));

const QuoteDetail = React.lazy(() => import("./Pages/QuoteDetail"));

const NotFound = React.lazy(() => import("./Pages/NotFound"));

const AllQuotes = React.lazy(() => import("./Pages/AllQuote"));

function App() {
  //lúc load nó hiện lên ui loanding

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>

          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>

          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>

          <Route path="/new-quote">
            <NewQuote />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
```

### 3. Build App for Production

Trong terminal chạy lệnh để buidl project

> npm run build

sau khi build thành công trong project nó tạo một thư mục mới build chứa những gì mình build trong project, ảnh minh họa ở dưới.
![enter image description here](https://i.ibb.co/z2p6vvD/anh1.png)

### 4. Upload Production Code to Server

Một ứng dụng trang đơn React, là một trang web tĩnh, điều đó có nghĩa là nó chỉ được tạo thành từ HTML, CSS.

Bạn có thể dùng nhiều server miễn phí khác, web này mình gọi api từ firebase và dùng firebase làm host, các bước thực hiện như sau vào firebase chọn project chọn tiếp Hosting và đến Set up Firebase Hosting.

Trở lại terminal chạy lệnh sau:

> npm install -g firebase-tools

Sau khi chạy xong đến bước tiếp theo đăng nhập vào firebase bằng lệnh.

> firebase login

Hình ảnh minh họa đăng nhập thành công.

![enter image description here](https://i.ibb.co/fdw9vHT/login.png)

Tạo thư mục firebase

> firebase init

sau đó thiếp lập tính năng hosting

![enter image description here](https://i.ibb.co/Bzcmcmf/init.png)

Cấu hình trang web

![enter image description here](https://i.ibb.co/4gTx3jS/anh2.png)

### 5. Configure Server

Cuối cùng là deloy firebase

> firebase deploy
> Link sau khi mình build thành công
> [React App (quotes-1de4b.web.app)](https://quotes-1de4b.web.app/quotes)
