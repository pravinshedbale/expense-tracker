import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = ({ onAddExpense }) => {
  const onAddExpenseHandler = (expense) => {
    const expenseData = { ...expense, id: Math.random().toString() };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onAddExpenseHandler} />
    </div>
  );
};

export default NewExpense;
