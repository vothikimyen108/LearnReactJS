import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  //khai báo biến kiểm tra giá trị nhập vào
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    //nếu có gõ kí tự thì đúng
    if (event.target.valuetrim().length > 0) setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //nếu không nhận đc kết quả thì false
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
  