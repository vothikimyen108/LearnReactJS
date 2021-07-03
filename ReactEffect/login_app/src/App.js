import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/context/auth-context";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //dùng useEffect mục đích useEffect để quản lý vòng đời của của một component và nó phục vụ chúng ta sử dụng trong function component thay vì các lifecycle như trước đây trong class component
  //hàm này dùng một lần khi render xong vì có dependency [] => rỗng
  useEffect(() => {
    //tạo biến lưu thông tin đăng nhập
    const storeUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    //nếu đã login thì lưu đã login
    if (storeUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    //lưu vào một biến -> xác định đã đăng nhập
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  // noi rang dang dung context hey tui owe ddaay dung provice
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
