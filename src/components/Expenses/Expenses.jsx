import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";
const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const onFilterChangeHandler = (filteredYear) => {
    console.log(filteredYear);
    setFilteredYear(filteredYear);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilter={onFilterChangeHandler}
        filteredYear={filteredYear}
      />
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => (
          <ExpenseItem expense={expense} key={expense.id} />
        ))
      ) : (
        <div>No Expense in selected year</div>
      )}
    </Card>
  );
};

export default Expenses;
