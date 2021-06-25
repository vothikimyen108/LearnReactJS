import Card from "../UI/Card";
import style from "./AddUser.module.css";
import Button from "../UI/Button";
import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errornofi, setErrorNoFi] = useState({
    title: "Messgae",
    content: "Please enter your name or age ",
  });
  const [error, setError] = useState(false);
  const addUserHandler = (event) => {
    //không cho gửi form
    event.preventDefault();
    //valid cho user name age điều kiện không trống và tuổi không âm
    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      setErrorNoFi({
        title: "Messgae",
        content: "Please enter your name or age ",
      });
      setError(true);
      return;
    }
    if (enteredAge.trim() < 1) {
      setError(true);
      setErrorNoFi({
        title: "message",
        content: "Please enter age 1 older than 1",
      });
      return;
    }
    //xuất kết quả thử
    // console.log(enteredAge, enteredName);
    //truyền 2 đứa này lên hàm mẹ thông quá state onAddUser
    props.onAddUser(enteredName, enteredAge);
    setEnteredAge("");
    setEnteredName("");
  };
  //hàm xử lí giá trị nhận vào username
  const userNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  //lấy giá trị nhân inpu vào
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  //hàm xử lí nếu người bấm ok đồng ý
  const handlerOnConFirm = () =>{
    setError(false);
  }
  //nếu có lỗi mới xuất ra thông báo
  return (
    <div>
      {error && (
        <ErrorModal onConfirm= {handlerOnConFirm}
          title={errornofi.title}
          message={errornofi.content}
        ></ErrorModal >
      )}

      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userNameHandler}
            value={enteredName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
