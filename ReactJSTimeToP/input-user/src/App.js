import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import "./App.css";
import React, { useState } from "react";

function App() {
  //khai báo mảng ban đầu nhận list user
  const [usersList, setUsersList] = useState([
    {
      id: Math.round().toString(),
      username: "yen",
      age: 18,
    },
  ]);
  //hàm xử lý nhận user name và age thêm vào mảng user
  const addUserHandler = (name, age) => {
    setUsersList((preUserList) => {
      return [
        ...preUserList,
        {
          id: Math.round().toString(),
          username: name,
          age: age,
        },
      ];
    });
  };
  //cách dùng Fragment <> <.> ,React.Fragment , Fragment
  return (
    <React.Fragment>
          <div className="App">
            <header className="App-header">
              <AddUser onAddUser={addUserHandler}></AddUser>
              <UserList users={usersList} />
            </header>
          </div>
    </React.Fragment>
  );
}

export default App;
