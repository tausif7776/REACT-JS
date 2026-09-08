import "./Home.css";
import hero from "../../assets/hero.png"

function Header() {


    let arr = [10, 20, 30, 40, 50, "Charlie"];
    
    let users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 },
        { id: 4, name: "David", age: 40 },
        { id: 5, name: "Eve", age: 45 },
    ]

    let userList = users.map((obj,index)=> <h5>{index+=1} {obj.name} {obj.age}</h5>)

    return (
        <>

          {/* {userList} */}

          {/* {
            users.map((obj, index)=>{
                return(
                    <h2>
                        {index+=1} {obj.name} {obj.age}
                    </h2>
                )
            })
          } */}

          {/* {users.map((obj,index)=><h6>{index+=1} {obj.name} {obj.age}</h6>)} */}

            <section>

            <img src={hero} alt="Not Found"/>


                <h2>Welcome to React JS Course! </h2>

                <p>
                    A component in React is a reusable and independent building
                    block of a user interface. It allows developers to divide a
                    large application into smaller and manageable parts such as
                    Navbar, Header, Footer, Login Form, User Profile, and Product
                    Card.
                </p>
            </section>

            <section className="productSection">
                <h3>Our Product</h3>

                <div className="productMid">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </section>
        </>
    );
}

export default Header;

function ProductCard() {

    return (
        <div className="productItems">
            <img src="/images/tausif.png" alt="Tausif" />
            <h3>Tausif Pic.</h3>
        </div>
    );
}