import Card from "../UI/Card";
import style from "./AddUser.module.css";
import Button from "../UI/Button";
import React, { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal.js";
const AddUser = (props) => {
  //dùng state
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  //sử dụng ref nó không thay đổi dữ liệu khi render lại, ngoiaf sử dụng như Dom nó còn dùng để sử dụng lưu trữ các biến các hàm, mảng, object sau mỗi lần render
  //dùng ref thì k cần sài onchange state thì cần
  let enterName = useRef("");
  let enterAge = useRef("");
  const [errornofi, setErrorNoFi] = useState({
    title: "Messgae",
    content: "Please enter your name or age ",
  });
  const [error, setError] = useState(false);
  const addUserHandler = (event) => {
    let inputName = enterName.current.value;
    let inputAge = enterAge.current.value;

    //không cho gửi form
    event.preventDefault();
    //valid cho user name age điều kiện không trống và tuổi không âm
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setErrorNoFi({
        title: "Messgae",
        content: "Please enter your name or age ",
      });
      setError(true);
      return;
    }
    if (inputAge.trim() < 1) {
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
    // props.onAddUser(enteredName, enteredAge);
    // setEnteredAge("");
    // setEnteredName("");
    //cách dùng ref
    props.onAddUser(inputName, inputAge);
    inputName = " ";
    inputAge = " ";
  };
  // //hàm xử lí giá trị nhận vào username
  // const userNameHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };
  // //lấy giá trị nhân inpu vào
  // const ageHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  //hàm xử lí nếu người bấm ok đồng ý
  const handlerOnConFirm = () => {
    setError(false);
  };
  //nếu có lỗi mới xuất ra thông báo
  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={handlerOnConFirm}
          title={errornofi.title}
          message={errornofi.content}
        ></ErrorModal>
      )}

      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={userNameHandler}
            // value={enteredName}
            ref={enterName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageHandler}
            // value={enteredAge}
            ref = {enterAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
