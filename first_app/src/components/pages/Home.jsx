import "./Home.css";

function Header() {

    let n = 10;
    let m = 20;

    return (
        <>
            <section>
                <h2>Welcome to React JS Course! {n+m} </h2>

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