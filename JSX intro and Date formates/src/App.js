import logo from "./logo.svg";
import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import ExpensesChart from "./components/Expenses/ExpensesChart";
function App() {
  const x = [
    { title: "Mobiles", amount: 5405, date: new Date(2022, 3, 12) },
    { title: "Cars", amount: 10235, date: new Date(2021, 7, 18) },
    { title: "Bikes", amount: 232305, date: new Date(2020, 2, 22) },
    { title: "Auto", amount: 1205, date: new Date(2019, 5, 2) },
    { title: "Guns", amount: 2305, date: new Date(2022, 9, 11) }
  ];
  return <div className="App">
    <NewExpenses/>
    {/* <ExpensesChart/> */}
    <Expense items={x}/>
  </div>;
}

export default App;
