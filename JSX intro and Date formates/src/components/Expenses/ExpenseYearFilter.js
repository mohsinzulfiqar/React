import React from 'react'

function ExpenseYearFilter({getYearFun}) {
    const handleSelect=(e)=>{
        getYearFun(e.target .value);
    }
  return (
    <div>
    <select name="year" id="year" onChange={handleSelect}>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
    </select></div>
  )
}

export default ExpenseYearFilter