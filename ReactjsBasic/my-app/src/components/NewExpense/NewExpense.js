import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";


const NewExpense = (prop) => {
  const onHandlerNewExpense = (enteredExpenseData) => {
    console.log("new expense")
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    prop.onCreateExpenseData(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseNew ={onHandlerNewExpense}/>
    </div>
  );
};
export default NewExpense;
