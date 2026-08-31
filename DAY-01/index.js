//const element = React.createElement('h1', {id:'title'}, "Hello JavaScript");


// JSX : javascript XML: look like html
const element = <h1 id="title">Hello JavaScript</h1>

const element2 = <div>
    <li>Good</li>
    <li>Morning</li>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element);
root.render(element2);