import React, { useEffect } from "react";
import { detailOrder } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import "../styles/screens/OrderDetailScreen.css";

function OrderDetailScreen(props) {
  const orderID = props.match.params.id;
  const infoOrder = useSelector((state) => state.infoOrder);
  const { error, loading, orderInfo } = infoOrder;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailOrder(orderID));
  }, [orderID, dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div className="orderdetail_wrapper">
          <div className="col-1 shadow">
            <div className="payment_detail">
              <h2>Payment </h2>
              <div className="payment_info">
                <h3>Method : {orderInfo.paymentMethod}</h3>
                <p>
                  Status :{" "}
                  {orderInfo.isPaid ? (
                    <span className="payment_status" id="paid">
                      Piad{" "}
                    </span>
                  ) : (
                    <span className="payment_status" id="notpaid">
                      {" "}
                      Haven't paid{" "}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="orders_detail">
              <h2>Order Details</h2>
              <h3>{orderInfo.orderItems.length} items in cart</h3>
              <ul>
                {orderInfo.orderItems.map((item) => (
                  <li key={item.product}>
                    <div className="card_orderdetail">
                      <div className="col-1">
                        <img src={item.image} alt={item.title} />
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div className="col-2">
                        <h3>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="summary_detail">
              <h2>Summary</h2>
              <ul>
                <li>
                  <div>Items Price</div>
                  <div>$ {orderInfo.itemsPrice}</div>
                </li>
                <li>
                  <div>Tax Price</div>
                  <div>$ {orderInfo.taxPrice}</div>
                </li>
                <li>
                  <div>Delivery Price</div>
                  <div>$ {orderInfo.deliveryPrice}</div>
                </li>
                <li>
                  <div>
                    <strong> Total Price</strong>
                  </div>
                  <div>
                    <strong> $ {orderInfo.totalPrice}</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderDetailScreen;
