// import React from 'react'

// const Event = () => {

//     const handleClick = () => {
//         alert("Button Clicked");
//     }

//   return (
//     <div>
//        <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

// export default Event

import React from 'react'

const Event = () => {
    
    const handleMouseOver = () => {
        alert("Mouse Over Event Triggered");
    }

  return (
    <div onMouseOver={handleMouseOver}>Mouse Event Here</div>
  )
}

export default Event