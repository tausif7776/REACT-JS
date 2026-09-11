// Prop Drilling -
// Prop Drilling is a process of passing data 
// from parent component to child component 
// through props. It can become cumbersome 
// when you have to pass data through multiple 
// levels of components, especially if the 
// intermediate components do not need that data.
//  This can lead to a lot of unnecessary prop passing 
// and make the code harder to maintain.

import { createContext } from "react";
import { useContext } from "react";


// Solution :- React Context API -

const UserContext = createContext()

const Bonus = () => {
    const name = "David Bekham";

   return <>
    <UserContext.Provider value={name}>
        <Greet/>
    </UserContext.Provider>
   </>
}

export default Bonus


const Parent = () => {
  return<>
    <h2>Parent</h2>
    <Child/>
  </>
}


const Child = ({name}) => {
  return <>
    <h2>Child</h2>
    <Greet/>
  </>
}


const Greet = () => {
    const name = useContext(UserContext)
  return <h1>Hello, {name}</h1>
}











// import React from 'react'

// const Bonus = () => {
//     const name = "Charlie";

//   return < Parent name = {name}/>
// }

// export default Bonus


// const Parent = ({ name }) => {
//   return< Child name={name}/>
// }


// const Child = ({name}) => {
//   return < Greet name = {name}/>
// }


// const Greet = ({ name }) => {
//   return <h1>Hello, {name}!</h1>
// }


// Demerit :- Hard to maintain and scale, especially when the component tree is deep.
//  If you need to pass data through many levels of components, 
// it can become cumbersome and error-prone.


// Solution :- React Context API -
