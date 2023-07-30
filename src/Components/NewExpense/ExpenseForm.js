import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    // This is a better use for when updating states based on previous states
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault(); // This prevents the page to reload, among other default behaviors that the submit button triggers the form to do

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2021-08-18"
              max="2101-08-18"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
