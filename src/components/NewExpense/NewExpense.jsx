import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = ({ onAddExpense }) => {
  const onAddExpenseHandler = (expense) => {
    const expenseData = { ...expense, id: Math.random().toString() };
    onAddExpense(expenseData);
    setIsEditing(false);
  };
  const [isEditing, setIsEditing] = useState(false);
  const startEditiingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditiingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={onAddExpenseHandler}
          stopEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
