import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          Shop<span>Ease</span>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Get Started</button>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="hero-content">
          <span className="badge">🚀 Modern Shopping Experience</span>

          <h1>
            Shop Smarter.
            <br />
            Live <span>Better.</span>
          </h1>

          <p>
            Discover amazing products at the best prices.
            Experience fast, secure and simple online shopping
            with ShopEase.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Shopping →
            </button>

            <button className="secondary-btn">
              Explore Products
            </button>
          </div>

          <div className="stats">
            <div>
              <h3>10K+</h3>
              <p>Products</p>
            </div>

            <div>
              <h3>50K+</h3>
              <p>Customers</p>
            </div>

            <div>
              <h3>4.9★</h3>
              <p>Rating</p>
            </div>
          </div>
        </div>


        {/* Hero Product Card */}
        <div className="hero-image">

          <div className="circle"></div>

          <div className="product-card">
            <div className="product-image">
              🛍️
            </div>

            <div className="product-info">
              <h3>Premium Collection</h3>
              <p>Latest Products</p>

              <div className="price-row">
                <strong>₹1,999</strong>
                <span>★★★★★</span>
              </div>
            </div>
          </div>

          <div className="floating-card card-one">
            ⚡ Fast Delivery
          </div>

          <div className="floating-card card-two">
            🔒 Secure Payment
          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="features" id="features">

        <div className="section-heading">
          <span>WHY CHOOSE US</span>
          <h2>Everything You Need</h2>
          <p>
            We make online shopping simple, secure and enjoyable.
          </p>
        </div>

        <div className="feature-container">

          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>
              Get your favorite products delivered quickly
              right to your doorstep.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payment</h3>
            <p>
              Your transactions are protected with secure
              payment technology.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💎</div>
            <h3>Best Quality</h3>
            <p>
              Carefully selected products with excellent
              quality and value.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3>24/7 Support</h3>
            <p>
              Our support team is always ready to help
              whenever you need us.
            </p>
          </div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="about" id="about">

        <div className="about-image">
          <div className="about-box">
            <span>🛒</span>
            <h3>ShopEase</h3>
            <p>Your trusted shopping partner</p>
          </div>
        </div>

        <div className="about-content">
          <span className="small-title">ABOUT US</span>

          <h2>
            Making Shopping
            <span> Simple & Easy</span>
          </h2>

          <p>
            ShopEase is a modern e-commerce platform designed
            to provide customers with a smooth and enjoyable
            shopping experience.
          </p>

          <p>
            From discovering products to secure checkout,
            everything is designed with simplicity and
            convenience in mind.
          </p>

          <button className="primary-btn">
            Learn More →
          </button>
        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="cta" id="contact">

        <div>
          <h2>Ready to Start Shopping?</h2>

          <p>
            Join thousands of happy customers today.
          </p>
        </div>

        <button className="cta-btn">
          Create Free Account →
        </button>

      </section>


      {/* ================= FOOTER ================= */}
      <footer>

        <div className="footer-content">

          <div className="footer-brand">
            <h2>Shop<span>Ease</span></h2>

            <p>
              Making online shopping simple,
              secure and enjoyable.
            </p>
          </div>

          <div>
            <h3>Company</h3>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h3>Support</h3>
            <a href="#home">Help Center</a>
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
          </div>

          <div>
            <h3>Follow Us</h3>
            <div className="social">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>LinkedIn</span>
            </div>
          </div>

        </div>

        <div className="copyright">
          © 2026 ShopEase. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}

export default LandingPage;