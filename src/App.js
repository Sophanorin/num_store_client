import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./screens/Products";
import Footer from "./components/Footer.js";
import ShopScreen from "./screens/ShopScreen.js";
import ProductsSlider from "./screens/ProductsSlider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetial from "./screens/ProductDetial.js";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import ContactScreen from "./screens/ContactScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import WishlistScreen from "./screens/WishlistScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
import UnavailablePage from "./screens/UnavailablePage";
import AdminRoute from "./components/AdminRoute";
import ProductListsScreen from "./screens/ProductListsScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import CategoryListScreen from "./screens/CategoryListScreen";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <header>
            <Home />
          </header>
          <main>
            <section>
              <section className="products-center">
                <ProductsSlider />
              </section>
              <section className="products-center">
                <Products />
              </section>
            </section>
          </main>
        </Route>
        <Route
          path="https://numstore.netlify.app/cart/:id?"
          component={CartScreen}
        />
        <Route
          path="https://numstore.netlify.app/signin"
          component={SigninScreen}
        />
        <Route
          path="https://numstore.netlify.app/contact"
          component={ContactScreen}
        />
        <Route
          path="https://numstore.netlify.app/register"
          component={RegisterScreen}
        />
        <Route
          path="https://numstore.netlify.app/checkout"
          component={CheckoutScreen}
        />
        <Route
          path="https://numstore.netlify.app/products/:id"
          exact
          component={ProductDetial}
        />
        <Route
          path="https://numstore.netlify.app/shop"
          component={ShopScreen}
        />
        <Route
          path="https://numstore.netlify.app/order/:id"
          exact
          component={OrderDetailScreen}
        />
        <Route
          path="https://numstore.netlify.app/ordershistory"
          component={OrderHistoryScreen}
        />
        <Route
          path="https://numstore.netlify.app/wishlist"
          component={WishlistScreen}
        />

        <Route
          path="https://numstore.netlify.app/product/:id/edit"
          component={ProductEditScreen}
          exact
        ></Route>
        <PrivateRoute
          path="https://numstore.netlify.app/profile"
          component={ProfileScreen}
        />
        <AdminRoute
          path="https://numstore.netlify.app/productlist"
          component={ProductListsScreen}
        ></AdminRoute>
        <AdminRoute
          path="https://numstore.netlify.app/orderlist"
          component={OrderListScreen}
        ></AdminRoute>
        <AdminRoute
          path="https://numstore.netlify.app/categorylist"
          component={CategoryListScreen}
        ></AdminRoute>
        <Route path="*" component={UnavailablePage} />
      </Switch>
      <footer id="footer" className="section footer">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
