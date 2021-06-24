import "./Expenses.css";

import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (prop) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };
  //lọc expense theo năm
  const filterExpenseByYear = prop.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  // //khai báo biến let nội dung
  // let expenseContent = <p>No Expenses</p>;
  // //nếu lọc các item expen theo năm thì thay đổi nội dung xuất ra
  // if (filterExpenseByYear.length > 0)
  //   expenseContent = filterExpenseByYear.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     ></ExpenseItem>
  //   ));

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {expenseContent} */}
      <ExpensesList items={filterExpenseByYear}></ExpensesList>
      {/* dung array map render ra các item */}
      {/* them key xác định chỉ mục phân biệt các đứa con */}
      {/* {prop.items.map( (expense) => (
        <ExpenseItem
        key={expense.id} 
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
      ))}  */}
      {/* <ExpenseItem
        title={prop.items[0].title}
        amount={prop.items[0].amount}
        date={prop.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={prop.items[1].title}
        amount={prop.items[1].amount}
        date={prop.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={prop.items[2].title}
        amount={prop.items[2].amount}
        date={prop.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={prop.items[3].title}
        amount={prop.items[3].amount}
        date={prop.items[3].date}
      ></ExpenseItem> */}
    </Card>
  );
};
export default Expenses;
