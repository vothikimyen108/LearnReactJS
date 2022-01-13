import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
//khai báo hàm nhận 2 tham số state và action hàm này trà về trạng thái mới
const emailReducer = (state, action) => {
  //nếu hành động thay đổi là nhập thì nó đổi giá trị đối tượng
  if (action.type === "USER_INPUT") {
    //trả về đối tượng state lúc khởi tạo
    return { value: action.val, isValid: action.val.includes("@") };
  }
  //nếu hành động blul kiểm tra valid
  if (action.type === "INPUT_BLUR") {
    //cái nayg gọi khi state có giá trị rồi, nên val lấy lại giá trị state trước đó trả về đời tượng mới {}
    return { value: state.value, isValid: state.value.includes("@") };
  }
  //nếu không có gì thì trả về đối tướng rỗng và sai
  return { value: "", isValid: false };
};
//khai báo hàm nhận 2 tham số state và action hàm này trà về trạng thái mới
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    //trả về đối tượng state lúc khởi tạo
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6};
  }
  return { value: "", isValid: false };
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  //nếu dùng dependencies. vơi mảng [] thì hàm dưới đây k hoạt động vì hàm đó đc gọi 1 lần
  //ta cần chuyền các dependencies vô để khi nó thay đổi thì hàm đó đc gọi
  // useEffect(()=>{
  //   setFormIsValid(
  //     enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //   );
  // },[enteredEmail,enteredPassword]);

  const emailChangeHandler = (event) => {
    //nó có thể loại là user input và val bằng giá trị nhập vào
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(
    //   event.target.value.includes("@") && enteredPassword.trim().length > 6,
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  // const validateEmailHandler = () => {
  //   setEmailIsValid(enteredEmail.includes('@'));
  // };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, paswordState.value);
  };
  //leanr use reducer
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isvalid: false,
  });
    //leanr use reducer
    const [paswordState, dispatchPassword] = useReducer(passwordReducer, {
      value: "",
      isvalid: false,
    });
  //kiểm tra sử lý email
  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };
//user reduce and effect
//dùng cấu trúc hủy
const {isValid:emailISValid} = emailState;
const {isValid:passwordIsValid} = paswordState;
  useEffect(()=>{
    setFormIsValid(
      emailISValid && passwordIsValid
    );
  },[emailISValid,passwordIsValid]);
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            paswordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={paswordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
