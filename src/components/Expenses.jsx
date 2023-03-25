import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      <ExpenseItem expenses={expenses} />
    </Card>
  );
};

export default Expenses;
