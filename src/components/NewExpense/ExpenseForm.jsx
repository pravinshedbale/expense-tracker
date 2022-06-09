import "./ExpenseForm.css";
const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" name="" id="" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" name="" id="" min={0.01} step={0.01} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Expense Date</label>
          <input type="date" name="" id="" />
        </div>
      </div>
      <button className="new-expense__actions" type="submit">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
