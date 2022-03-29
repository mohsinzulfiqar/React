import React from 'react'

function JsxIntro() {
    const d = new Date();
    const year=d.getFullYear();
    const month=d.toLocaleString('eu-US',{month:'long'})
    const day=d.toLocaleString('eu-US',{day:'2-digit'})
  
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dayName = days[d.getDay()];
  //   d.getMinutes();d.getSeconds();d.getMilliseconds();d.getDay();
  //   const d = new Date();
  // d.setFullYear(2020);
  // const d = new Date();
  // d.setFullYear(2020, 11, 3);
  // const d = new Date();
  // d.setMonth(11);
  // const d = new Date();
  // d.setDate(15);
  // const d = new Date();
  // d.setDate(d.getDate() + 50);
  // compare dates
  // let text = "";
  // const today = new Date();
  // const someday = new Date();
  // someday.setFullYear(2100, 0, 14);
  
  // if (someday > today) {
  //   text = "Today is before January 14, 2100.";
  // } else {
  //   text = "Today is after January 14, 2100.";
  // }
  return (
    <div>
          <h1 style={{background:"black",color:"white",padding:"30px"}}>Time Formates</h1>
     <h3>toISOString</h3>
     <span>{d.toISOString()}</span><br></br>

     <h3>toJSON</h3>
     <span>{d.toJSON()}</span><br></br>

     <h3>toDateString</h3>
     <span>{d.toDateString()}</span><br></br>

     <h3>toLocaleDateString</h3>
     <span>{d.toLocaleDateString()}</span><br></br>

     <h3>toTimeString</h3>
     <span>{d.toTimeString()}</span><br></br>

     <h3>getTimezoneOffset</h3>
     <span>{d.getTimezoneOffset()}</span><br></br>

     <h3>toLocaleTimeString</h3>
     <span>{d.toLocaleTimeString()}</span><br></br>

     <h3>toUTCString</h3>
     <span>{d.toUTCString()}</span><br></br>

      <h3>Get only full Year</h3>
     <span>{year}</span><br></br>

     <h3>Get only month</h3>
     <span>{month}</span><br></br>

     <h3>Get only day</h3>
     <span>{day}</span><br></br>

     <h3>Get only day Name</h3>
     <span>{dayName}</span><br></br>


     {/* we can not write like this "{d}" it throws an error because it return an object and we can,t show direct object so we convert it into string */}
    </div>
  )
}

export default JsxIntro 