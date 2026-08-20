import { Link } from "react-router-dom";

const Home = () => {

  return (
    <main className="storeHome">
      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">New tech, better prices</p>
          <h1>Everything you want, in one smart cart.</h1>
          <p className="heroText">Discover handpicked technology from the brands you love. Simple shopping, quick delivery and a cart that remembers every choice.</p>
          <div className="heroActions"><Link className="primaryButton" to="/redux-cart/products">Shop collection</Link><Link className="textButton" to="/redux-cart/cart">View cart</Link></div>
          <div className="heroStats"><span><strong>8+</strong> curated products</span><span><strong>4.7/5</strong> average rating</span></div>
        </div>
        <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=90" alt="Modern desk with technology products" />
      </section>
      <section className="benefits"><article><strong>Free delivery</strong><span>On orders over Rs. 2,000</span></article><article><strong>Secure checkout</strong><span>Protected payments, always</span></article><article><strong>Easy returns</strong><span>Simple 7-day return policy</span></article></section>
    </main>
  );
};

export default Home;
