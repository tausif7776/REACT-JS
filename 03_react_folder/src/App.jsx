import { useEffect, useState } from "react";

function App() {

    const [user, setUser] = useState([]);
    // const [name, setName] = useState("");
    const [count, setCount] = useState(30);

    useEffect(() => {

        async function GithubProfile() {
        
        const response = await fetch(`https://api.github.com/users?per_page=${count}`);
        const data = await response.json();
        setUser(data);
    }

    GithubProfile();


    },[count])


//     function handleChange(e) {
//     setName(e.target.value.toUpperCase());
//    }


    return(
        <>
            <h1>Github User</h1>
            <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}></input>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", gap:"10px"}}>
            {
                user.map(users=>(
                    <img src={users.avatar_url} height={"100px"} width={"100px"} key={users.login}/>
                ))
            }

            </div>
        </>
    )
}

export default App