/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!input || !amount) {
      return;
    }

    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount: amount
    };

    setExpenses([...expenses, newExpense]);
    // This is the spread syntax. It takes all the items currently in the expenses array and "spreads" them out as individual items.
    // Think of it like copying all the items from the expenses array.
    setInput('');
    setAmount('');
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  return (
    <div>
      <h2>Expense Tracker</h2>
      <div>
        <input type='text' value={input} placeholder='Expense' onChange={(e) => setInput(e.target.value)}></input>
        <input type='text' value={amount} placeholder='Amount' onChange={(e) => setAmount(e.target.value)}></input>
        <button onClick={addExpense}>Add Expense</button>
      </div>

      <ul className='expense-list'>
  {expenses.map((expense) => (
    <li key={expense.id}>
      <span>{expense.title}</span> 
      <span className="amount">Rs {expense.amount}</span>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </li>
  ))}
</ul>


    </div>
  )
}



export default App
