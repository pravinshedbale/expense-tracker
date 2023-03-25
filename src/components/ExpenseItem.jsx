import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
const ExpenseItem = ({ expenses }) => {
  return expenses.map((expense) => (
    <Card className="expense-item" key={expense.id}>
      <ExpenseDate expenseDate={expense.date} />
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">₹ {expense.amount}</div>
      </div>
    </Card>
  ));
};

export default ExpenseItem;
