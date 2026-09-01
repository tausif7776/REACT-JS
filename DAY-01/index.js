//const element = React.createElement('h1', {id:'title'}, "Hello JavaScript");


// JSX : javascript XML: look like html
// const element = <h1 id="title">Hello JavaScript</h1>

// Good Practise
// const element2 = (<div>
//     <li>Good</li>
//     <li>Morning</li>
// </div>);

// const element3 = <>
//     <h1>Hello Buddy</h1>
//     <h2>JavaScript & React.js</h2>
// </>

// function App(name) {
//     return (
//         <h1>Helllo JavaScript {name}</h1>
//     );
// }

// const a = App("Coder");


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element);
// root.render(element2);
// root.render(element3);
// root.render(App());
// root.render(a)

//const age = 22;
//const isLogedIn = true;
//const element2 = <h3>Buddy You are {isLogedIn?<p>Logged In</p>:<p>Kindly SignIn</p>}</h3>
//const element = <h1>Hello Coder {age>25?"Adult":"Kid"}</h1>

// const course = ["HTML", "CSS", "JavaScript", "React"];

// const element = (
//     <ul>
//         {course.map(courses=><li>{courses}</li>)}
//     </ul>
// );


// function App(props) {

//     return (
//         <h1>Hello Bhai {props.name} {props.age}</h1>
//     )
// }


// //     name:"Tausif",
// //     age:22
// // }

// const element = <App name="Tausif" age={22}></App>


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// // root.render(element2);

const element = <h1>Hello Weolcome to js</h1>

ReactDOM.createRoot(document.getElementById('root')).render(element);