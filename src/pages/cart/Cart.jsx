import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate(); 
  return (
    <div className="cart">
      <div className="cartItems">
        <div className="cartItemsTitle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cartItemsTitle cartItemsItem">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cartBottom">
        <div className="cartTotal">
          <h2>Cart Total</h2>
          <div>
            <div className="cartTotalDetils">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartTotalDetils">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0 ?0:2}</p>
            </div>
            <hr />
            <div className="cartTotalDetils">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECK OUT</button>
        </div>
        <div className="cartPromoCode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cartPromoCodeInput">
              <input type="text" placeholder="promocode"/>
              <button>Submit</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
