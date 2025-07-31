import "./App.css";

// รวมทั้งหมดใน App Component
function App() {
  return (
    <div>
      <Header />   
      <Main />
      <ProductSection />
      <Footer />
    </div>
  );
}

// Todo 1: Header Component
function Header() {
  return (
    <header>
      <nav>
        <div className="logo">🚀 XYZ CORP</div>
        <ul className="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Todo 2: Main Component
function Main() {
  return (
    <main>
      <div className="company-detail-left">
        <h1>Welcome to XYZ Corp</h1>
        <p>Your Trusted Partner in Excellence</p>
        <img src="https://placehold.co/300x300" alt="Company" />
      </div>
      <div className="company-detail-right">
        <h2>About Our Company</h2>
        <p>
          Welcome to XYZ Corp, where excellence meets innovation. We are a
          passionate team dedicated to providing high-quality solutions for
          the technology industry. With a track record of 10 years of success,
          we have become a trusted partner for clients worldwide.
        </p>
        <p>
          Our mission is to empower businesses through cutting-edge
          technology. We believe in integrity, collaboration, and innovation,
          and we strive to make a positive impact on businesses and
          communities alike.
        </p>
        <p>
          At XYZ Corp, we take pride in our commitment to staying at the
          forefront of technological advancements. Our team of experts is
          ready to collaborate with you to tackle your most complex challenges
          and drive your success.
        </p>
        <button className="learn-button">Learn More</button>
      </div>
    </main>
  );
}

// Todo 5 & 6: Button Component
// เปลี่ยน className เป็น "add-to-cart-button-secondary"
function Button({ children }) {
  return (
    <button className="add-to-cart-button-secondary">
      {children}
    </button>
  );
}

// สร้าง ProductCard Component ช่วยลดซ้ำ
function ProductCard({ imgSrc, alt, title, price }) {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={alt} />
      <h3>{title}</h3>
      <p className="product-price">{price}</p>
      <Button>Add to Cart</Button>
    </div>
  );
}

// Todo 3: ProductSection Component
function ProductSection() {
  return (
    <section className="product-section">
      <div className="product-section-container">
        <h2 className="product-featured-heading">Featured Products</h2>
        <div className="product-card-list">
          <ProductCard
            imgSrc="https://placehold.co/300x300"
            alt="The Lorem Ipsum for photos."
            title="Premium Bluetooth Headphones"
            price="2,400 Baht"
          />
          <ProductCard
            imgSrc="https://placehold.co/300x300"
            alt="The Lorem Ipsum for photos."
            title="Classic Leather Watch"
            price="4,000 Baht"
          />
          <ProductCard
            imgSrc="https://placehold.co/300x300"
            alt="The Lorem Ipsum for photos."
            title="Organic Green Tea"
            price="79.99 Baht"
          />
        </div>
      </div>
    </section>
  );
}

// Todo 4: Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Your Ecommerce Store. All rights reserved.</p>
    </footer>
  );
}

export default App;
