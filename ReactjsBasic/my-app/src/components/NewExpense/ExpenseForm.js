import React, {useState}from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
    //sủ dụng khai báo nhiều state
    const [enterTitle,setExterTitle] = useState('');
    const [enterAmount,setEnterAmount] = useState('');
    const [enterDate,setExterDate] = useState('');
    //khai báo các hàm
    const changeHandlerTitle = (Event) => {
       setExterTitle(Event.target.value);
    }
    const changeHandlerAmount = (Event) => {
        setEnterAmount(Event.target.value);
     }
     const changeHandlerDate = (Event) => {
        setExterDate(Event.target.value);
     }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changeHandlerTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={changeHandlerAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={changeHandlerDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
