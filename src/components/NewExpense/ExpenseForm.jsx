import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onSaveExpense, stopEditing }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const addExpenseHandler = (e) => {
    e.preventDefault();
    if (!(title && amount && date)) {
      alert("Please enter valid data");
      return;
    }
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    onSaveExpense(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name=""
            id=""
            onChange={titleChangeHandler}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            name=""
            id=""
            min={0.01}
            step={0.01}
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Expense Date</label>
          <input
            type="date"
            name=""
            id=""
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <button
        className="new-expense__actions"
        type="submit"
        onClick={addExpenseHandler}
      >
        Add Expense
      </button>
      <button className="new-expense__actions" onClick={stopEditing}>
        Cancel
      </button>
    </form>
  );
};

export default ExpenseForm;
