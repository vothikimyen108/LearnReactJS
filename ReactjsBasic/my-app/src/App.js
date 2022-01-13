//import vào sài
import Expenses from "./components/Expense/Expenses";
import "./App.css";
//import react from "react"
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

// khai báo 1 mảng gồm các object expense
const DUMM_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMM_EXPENSES)
  //Lifting State Up khái niệm truyền dữ liệu từ cha qua con từ con qua cha, qua prop
  const handlerCreateExpenData = (newExpense) => {
    setExpenses(preExpense => { return [...preExpense,newExpense]}); //dung preExpense lấy đc dữ liệu cũ hơn =)) hông hiểu lắm

  };
  // viết jsx tiện hơn
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onCreateExpenseData = {handlerCreateExpenData}></NewExpense>
        <Expenses items={expenses} />
      </header>
    </div>
  );
  //viết bằng react để hiểu cấu trúc
  // return react.createElement('div',{},react.createElement(Expenses,{items:expenses}));
}

export default App;
