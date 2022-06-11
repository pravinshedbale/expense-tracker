import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return (
      <p className="expenses-list__fallback">
        No Expense Found in Selected Year
      </p>
    );
  }
  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </ul>
  );
};

export default ExpensesList;
