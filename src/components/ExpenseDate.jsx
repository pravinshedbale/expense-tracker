import "./ExpenseDate.css";
const ExpenseDate = ({ expenseDate }) => {
  const expenseMonth = expenseDate.toLocaleDateString("en-US", {
    month: "long",
  });
  const expenseDay = expenseDate.toLocaleDateString("en-US", {
    day: "2-digit",
  });
  const expenseYear = expenseDate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__year">{expenseYear}</div>
      <div className="expense-date__day">{expenseDay}</div>
    </div>
  );
};

export default ExpenseDate;
