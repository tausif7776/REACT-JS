// import React from 'react'

// const List = () => {

//   const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes', 'Pineapple', 'Strawberry', 'Watermelon', 'Papaya', 'Kiwi', 'Cherry', 'Blueberry', 'Raspberry', 'Blackberry', 'Coconut', 'Lemon', 'Lime', 'Peach', 'Plum', 'Apricot'];
    
//   return (
//     <div>
//       <h1>List of Fruits</h1>
//       <ol>
//         {
//           fruits.map((fruit, index) => (
//             <li key={index}>{fruit}</li>
//           ))
//         }
//       </ol>
//     </div>
//   )
// }

// export default List

import React from 'react'

const List = () => {

  const user = [
    {
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com'
    },
    {
      name: 'Jane Smith',
      age: 25,
      email: 'jane.smith@example.com'
    },
  ]

  return (
    <div>
      <h1>List of Users</h1>
      {
        user.map((user, index) => (
          <div key={index}>
            <h2>Name: {user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
        ))  
      }
    </div>
  )
}

export default List