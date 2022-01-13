import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
//import styled để sài
import styled from "styled-components";
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  //khai báo biến kiểm tra giá trị nhập vào
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    //nếu có gõ kí tự thì đúng
    if (event.target.value.trim().length > 0) setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //nếu không nhận đc kết quả thì false
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  //khai báo biên dùng styled tạo thẻ và định dạng style cho thẻ
  const FormControl = styled.div`
    margin: 0.5rem 0;
    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
      color: ${(props) => (props.invalid ? "red" : "black")};
    }
    & input {
      display: block;
      width: 100%;
      border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
      background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }
    & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }
  `;

  //dùng stlyling thông báo nếu nhập sai
  return (
    <form onSubmit={formSubmitHandler}>
      {/* cách dùng css thêm vào class invalid */}
      {/* <div className={`form-control  ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label> */}
      {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{
            color: !isValid ? "red" : "black",
            background: !isValid ? "salmon" : "transparent",
          }} */}
      {/* <input type="text" onChange={goalInputChangeHandler} />
      </div> */}
      {/* dùng trực tiếp */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
