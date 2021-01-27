import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartAction";
import { moveItemToWishlist } from "../actions/wishlistAction";
import MessageBox from "../components/MessageBox";
import "../styles/screens/WishlistScreen.css";
function WishlistScreen() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const { wishlistItems } = wishlist;

  const moveItemHandler = (item) => {
    dispatch(moveItemToWishlist(item));
    dispatch(addToCart(item.product, 1));
  };
  return (
    <div className="wishlist">
      <h1>Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <MessageBox>
          Wishlist is Empty.
          <Link to="/shop">Go Shopping</Link>
        </MessageBox>
      ) : (
        wishlistItems.map((item) => (
          <li key={item.product}>
            <div className="card_order">
              <div className="col-1">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>

              <div className="col-2 flex-row">
                <h3>$ {item.price}</h3>
                <button
                  type="button"
                  className="wishlist-btn"
                  onClick={() => moveItemHandler(item)}
                >
                  Move To Cart
                </button>
              </div>
            </div>
          </li>
        ))
      )}
    </div>
  );
}

export default WishlistScreen;
