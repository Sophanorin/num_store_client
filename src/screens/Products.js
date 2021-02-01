import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import "../styles/Products.css";
import { listProducts } from "../actions/productActions";

function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, products, loading } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="wrapper-products">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <>
          <div className="header-productslist">
            <h2>Quality Products</h2>
            <span>STUDENTS</span>
            <p>
              There are products that quality make from students in university
            </p>
          </div>
          <div className="op category__center">
            {products.map((product, index) => {
              if (index === 8) return;
              return <Product key={product._id} product={product} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
