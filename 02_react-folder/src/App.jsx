import { useState } from "react";

function App() {

 const [count, setCount] = useState(0);

  // function IncreaseNumber() {
  //   count++;
  //   // console.log(count);
  //   const para = document.querySelector('p');
  //   para.textContent = `Counter: ${count}`;
  //   const button = document.querySelector('button');
  //   button.textContent = `Increment: ${count}`;
  // }

  

  function IncreaseNumber() {
    setCount(count+1);
  }



  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={IncreaseNumber}>Increment: {count}</button>
    </>
  )
}


export default App;