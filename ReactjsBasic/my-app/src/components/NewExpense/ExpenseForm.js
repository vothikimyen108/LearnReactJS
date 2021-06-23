import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  //sủ dụng khai báo nhiều state
  const [enterTitle,setExterTitle] = useState('');
  const [enterAmount,setEnterAmount] = useState('');
  const [enterDate,setExterDate] = useState('');
  //cách khách sử dụng nhiều state
//   const [userInput, setUserInput] = useState({
//     enterTitle: "",
//     enterAmount: "",
//     enterDate: "",
//   });

  //khai báo các hàm
  const changeHandlerTitle = (Event) => {
    setExterTitle(Event.target.value)
    //nó phụ thuộc vào trạng thái trước đó
    // setUserInput({
    //   ...userInput, //sao chép lại các giá trị đầu để mấy thuoocj tính còn lại khôn mất
    //   enterTitle: Event.target.value,
    // });
    //có cách thêm hàm
    // setUserInput((preState) => {
    //   return {
    //     ...userInput, //sao chép lại các giá trị đầu để mấy thuoocj tính còn lại khôn mất
    //     enterTitle: Event.target.value,
    //   };
    // });
  };
  const changeHandlerAmount = (Event) => {
    setEnterAmount(Event.target.value)
    // setUserInput({
    //   ...userInput, //sao chép lại các giá trị đầu để mấy thuoocj tính còn lại khôn mất
    //   enterAmount: Event.target.value,
    // });
  };
  const changeHandlerDate = (Event) => {
    setExterDate(Event.target.value)
    // setUserInput({
    //   ...userInput, //sao chép lại các giá trị đầu để mấy thuoocj tính còn lại khôn mất
    //   enterDate: Event.target.value,
    // });
  };

  //ham khi submit
  const submitHandler = (event) => {
    //Event.preventDefault sẽ đảm bảo rằng form không bao giờ được gửi, và nó đã giành được quyền kiểm soát và ngăn chặn sự kiện đó khi click
    event.preventDefault();
    //tạo một đối tượng mới
    const expenseData = {
      title:enterTitle,
      amount:enterAmount,
      date:new Date(enterDate)
    }
    //xóa các value trên input
    setExterTitle('');
    setEnterAmount('');
    setExterDate('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changeHandlerTitle}  value={enterTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeHandlerAmount} value={enterAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={changeHandlerDate} value ={enterDate}
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
