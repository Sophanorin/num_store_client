import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsEye, BsHeartFill } from "react-icons/bs";
import { ImLoop2 } from "react-icons/im";
import Rating from "./Rating";
import "../styles/Product.css";
import { addToCart, removeFromCart } from "../actions/cartAction";
import { addItemWishlist } from "../actions/wishlistAction";

function Product(props) {
  const { product } = props;
  const dispatch = useDispatch();

  const addTOCartHanlder = (id) => {
    dispatch(addToCart(id, 1));
  };
  const addToWishlistHandler = (id) => {
    dispatch(addItemWishlist(id));
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <div className="product category__products">
        <div className="product__header">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product__footer">
          <h3>
            {product.title.length < 20
              ? product.title
              : product.title.substring(0, 22) + "..."}
          </h3>
          <div className="rating">
            <Rating rating={product.rating} />
          </div>
          <div className="product__price">
            <h4>${product.price}</h4>
          </div>
          <button
            type="button"
            className={`product__btn ${
              product.countInStock === 0 ? "not-allowed" : ""
            }`}
            onClick={() =>
              product.countInStock !== 0 ? addTOCartHanlder(product._id) : {}
            }
          >
            Add To Cart
          </button>
        </div>
        <ul>
          <li>
            <Link to={`/products/${product._id}`}>
              <BsEye />
            </Link>
          </li>
          <li>
            <a onClick={() => addToWishlistHandler(product._id)}>
              <BsHeartFill />
            </a>
          </li>
          <li>
            <a href="#">
              <ImLoop2 />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Product;
