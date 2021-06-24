import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card';
import React, {useState} from 'react';

const Expenses = (prop) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectYear)=> {
    setFilteredYear(selectYear)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseItem
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
      ></ExpenseItem>
    </Card>
  );
}
export default Expenses;
