import React from "react";
import { useEffect } from "react";
import "./checkout.scss";

export default function Checkout({ currentCart, total }) {
  useEffect(() => {
    document.title = `Checkout Sankofa | Explore, Experience, Embrace.`;
  });
  return (
    <>

        <div className="checkout--express">
          <h1>Express Checkout</h1>
          <figure className="checkout--express-payments">
            <img src="/images/Google_Pay_Logo.png" alt="Google Pay" />
            <img src="/images/Masterpass-logo.svg" alt="Masterpass" />
            <img src="/images/paypal.jpeg" alt="Paypal" />
          </figure>
        </div>
      <div className="checkout">
        <div className="checkout--payment">
          <div className="checkout--heading">
            <h1>Your Information</h1>
            <span>
              You have{" "}
              {
                //rectify code to factor in 0 items in cart.
                currentCart.length === 1
                  ? "1 experience in your suitcase"
                  : `${currentCart.length} experiences in your suitcase`
              }
            </span>
          </div>
          <div>
            <form className="form" action="submit">
                <div className="form--data">
                    <label htmlFor="name">First Name</label>
                    <input type="text" />
                </div>
                <div className="form--data">
                    <label htmlFor="email">Last Name</label>
                    <input type="text" />
                </div>
                <div className="form--data">
                     <label htmlFor="phone">Phone Number</label>
                     <input type="tel" />
                </div>
                <div className="form--data">
                    <label htmlFor="address">Street and house number</label>
                    <input type="text" />
                </div>

                <div className="form--data">
                    <label htmlFor="address">Apartment, suite, etc. (optional)</label>
                    <input type="text" />
                </div>

                <div className="form--data-address">
                  <div className="form--data-address-sec">
                      <label htmlFor="postalcode">Postal code</label>
                      <input type="text" />
                  </div >
                  <div className="form--data-address-sec">
                      <label htmlFor="city">City</label>
                      <input type="text" />
                  </div>
                  <div className="form--data-address-sec">
                      <label htmlFor="province">Province</label>
                      <select name="province" id="province">
                          <option value=""></option>
                          <option value="BC">BC</option>
                          <option value="AB">AB</option>
                          <option value="SK">SK</option>
                          <option value="MB">MB</option>
                          <option value="MB">NL</option>
                          <option value="MB">ON</option>
                          <option value="MB">NWT</option>
                          <option value="MB">QC</option>
                          <option value="MB">YK</option>
                          <option value="MB">NS</option>
                          <option value="MB">PEI</option>
                      </select>
                  </div> 
                </div>
                
                
            </form>
          </div>
        </div>
        <div className="checkout--summary">
          <h2>Your Summary</h2>
          <ul className="cart--listCard">
            {currentCart.map((item, index) => (
              <div className="cart--list-container">
                <li key={index} className="cart--list">
                  <div className="cart--list-name">{item.name}</div>
                  <div className="cart--list-price">${item.price}</div>
                </li>
              </div>
            ))}
          </ul>
          <div className="checkout--totals">
            <div>
                <span className="checkout--totals-amount">Your total amount due: </span>
                <span className="checkout--totals-total">${total}</span>
            </div>
            {/* <div className="checkout--totals-box">
                <span className="checkout--totals-amount">Tax Amount</span>
                <span className="checkout--totals-total">  ${total}</span>
            </div> */}
          </div>
          
        </div>
      </div>
      <div className="checkout--button">
      <button class="button-57" role="button"><span class="text">Not Done Yet?</span><span>Keep Shopping</span></button>
      <button class="button-57" role="button"><span class="text">Pay Now</span><span>Enjoy!</span></button>
      </div>
    </>
  );
}
