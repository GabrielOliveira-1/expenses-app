import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState("2020");

  const readSelectedYear = (enteredSelectedFilter) => {
    setFilterValue(enteredSelectedFilter);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterValue}
          onSelectedYear={readSelectedYear}
        />
        <ExpenseItem
          title={props.expense[0].title}
          amount={props.expense[0].amount}
          date={props.expense[0].date}
        />
        <ExpenseItem
          title={props.expense[1].title}
          amount={props.expense[1].amount}
          date={props.expense[1].date}
        />
        <ExpenseItem
          title={props.expense[2].title}
          amount={props.expense[2].amount}
          date={props.expense[2].date}
        />
        <ExpenseItem
          title={props.expense[3].title}
          amount={props.expense[3].amount}
          date={props.expense[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
