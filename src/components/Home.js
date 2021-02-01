import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <section className="container-home">
      <img
        src="https://res.cloudinary.com/numstore/image/upload/v1611212837/132614172_4903152149756881_3844421171996773372_o_copy_copy_ob7h70.jpg"
        alt=""
      />
      <div className="info">
        <h2>NUM STORE</h2>
        <p>
          NUMSTORE is the store that created by students of National University
          of Management in order to make a business for students in university.
        </p>
        <div className="control">
          <Link to="/contact" className="contact">
            Contact Us
          </Link>
          <Link to="https://numstore.netlify.app/shop" className="shop">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
