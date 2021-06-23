import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  //sủ dụng khai báo nhiều state
  // const [enterTitle,setExterTitle] = useState('');
  // const [enterAmount,setEnterAmount] = useState('');
  // const [enterDate,setExterDate] = useState('');
  //cách khách sử dụng nhiều state
  const [userInput, setUserInput] = useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: "",
  });

  //khai báo các hàm
  const changeHandlerTitle = (Event) => {
    setUserInput({
      ...userInput, //sao chép lại các giá trị đầu để mấy thuoocj tính còn lại khôn mất
      enterTitle: Event.target.value,
    });
  };
  const changeHandlerAmount = (Event) => {
    setUserInput({
      ...userInput, //sao chép lại các giá trị đầu để mấy thuoocj tính còn lại khôn mất
      enterAmount: Event.target.value,
    });
  };
  const changeHandlerDate = (Event) => {
    setUserInput({
      ...userInput, //sao chép lại các giá trị đầu để mấy thuoocj tính còn lại khôn mất
      enterDate: Event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changeHandlerTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeHandlerAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={changeHandlerDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
