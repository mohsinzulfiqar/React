import React, { useState } from 'react'

function ExpenseForm() {
    const [enterTitle, setTitle]=useState("");
    const [enterAmount, setAmount]=useState("");
    const [enterDate, setDate]=useState("");


    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleAmount=(e)=>{
        setAmount(e.target.value);
    }
    const handleDate=(e)=>{
        setDate(e.target.value)
    }
    const handleSubmitt=(e)=>{
        e.preventDefault()
        const expenseData={
            title:enterTitle,
            amount:enterAmount,
            date:new Date(enterDate)
        }


        console.log("Data",expenseData);
        setTitle("");
        setAmount("");
        setDate("");
    }
    // const [userInput, setUserInput]=useState({
    //     enterTitle:"",
    //     enterAmount:"",
    //     enterDate:""
    // })

    // First mehtod to handle data using each state for each input
    // const [val, setVal]=useState('')
    // const handleChange=(e)=>{
    //     // if we do the same in js
    //     // document.getElementById('').addEventListener('click',(event)=>{})
    //     console.log(e.target.value);
    //     setVal(e.target.value);
    //     console.log("now value", val);
    // }
    // Second mehtod to handle data using each state for each input
   
    // const handleChange=(e)=>{
    // we can do this but it some time states are not updated and we receive wrong data
    // setUserInput({
    //     ...userInput,
    //     enterTitle: e.target.value,
    // })
    // setUserInput((prevState)=>{
    //     return{ ...prevState, enterTitle: e.target.value }
    // });
    // console.log("->>>>>>>",userInput);


  return (
    <form onSubmit={handleSubmitt}>
        <div className='new-expense__controls'>
            {/* First Method to handle input data
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={handleChange}/>
            </div> */}
             <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={handleTitle} value={enterTitle}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01"  onChange={handleAmount} value={enterAmount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2023-12-31"  onChange={handleDate} value={enterDate}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm