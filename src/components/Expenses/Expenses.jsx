import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
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
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
