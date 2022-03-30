import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseYearFilter from "./ExpenseYearFilter";
function Expense(props) {
  const [data, setData]=useState(props.items)
  console.log("this is year",props.items[4].date)

  const getYear=(passYearValue)=>{
    const z=props.items.filter(y=>{
      return y.date.getFullYear().toString() === passYearValue
    })
    setData(z)
    if(z.length === 0){
      return <h2>No Expense Found</h2>
    }
  }


  return (
    <div className="expense">
      <ExpenseYearFilter getYearFun={getYear}/>
      {data && data.map((item,index)=>{
        console.log(item);
        return(
          <ExpenseItem 
          key={index}
         title={item.title}
         amount={item.amount}
         date={item.date}
       />
        )
         
      })}
      {/* <ExpenseItem title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
        /> */}
    </div>
  );
}

export default Expense;
