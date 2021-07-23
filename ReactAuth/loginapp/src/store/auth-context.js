import React, { useState } from "react";

//khai báo ngữ cảnh đầu
export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: true,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token; //trả về true nếu token không rỗng

  const LoginHandler = (token) => {
    setToken(token);
  };
  const LogoutHandler = () => {
    setToken(null);
  };
  // khai báo các giá trị ban đầu
  const auThValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: LoginHandler,
    logout: LogoutHandler,
  };

  return (
    <AuthContext.Provider value={auThValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
