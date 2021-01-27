import React, { useEffect, useState } from "react";
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import HeroSlider from "../components/HeroSlider.js";
import Slider from "react-slick";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import "../styles/screens/ShopScreen.css";
import Product from "../components/Product";
import { categorylist } from "../actions/categoryActions";

function ShopScreen() {
  const [price, setPrice] = useState(500);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  const productList = useSelector((state) => state.productList);
  const { error, products, loading } = productList;
  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    dispatch(listProducts());
    dispatch(categorylist());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <>
          <div id="heroslider">
            <Slider {...settings}>
              {products.map((product, index) => {
                if (index === 5) return;
                return <HeroSlider key={product._id} product={product} />;
              })}
            </Slider>
          </div>
          <section>
            <div className="product_badge">
              <h3>New Arrival</h3>
            </div>
            <div className="products_section flex">
              <div className="filter">
                <ul>
                  <li>
                    <label htmlFor="category">Category : </label>
                    <select
                      id="category"
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option selected>All</option>
                      {categories &&
                        categories.map((category) => (
                          <option key={category._id}>{category.name}</option>
                        ))}
                    </select>
                  </li>
                  <li>
                    <label htmlFor="price">Price : </label>
                    <input
                      id="price"
                      type="range"
                      name="price"
                      min="0"
                      max="1000"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      step="1"
                    />
                    <span>${price}</span>
                  </li>
                </ul>
              </div>
              <div className="products_list">
                <div className="category__center">
                  {products.map((product) => {
                    if (
                      product.category.toLowerCase() === filter.toLowerCase() ||
                      (filter === "All" &&
                        product.price > 0 &&
                        product.price <= price)
                    )
                      return <Product key={product._id} product={product} />;
                  })}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default ShopScreen;
